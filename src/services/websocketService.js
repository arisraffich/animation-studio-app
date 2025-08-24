/**
 * WebSocket service for real-time progress updates
 * OPTIMIZATION 3: Real-time progress from server
 */

class WebSocketService {
  constructor() {
    this.ws = null;
    this.subscribers = new Map(); // Map of generation IDs to callback functions
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectInterval = 1000;
  }

  connect() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      try {
        // Determine WebSocket URL based on current location
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const hostname = window.location.hostname;
        // Use port 8081 for server WebSocket, dev server can be on 3000 or 3001
        const port = (window.location.port === '3000' || window.location.port === '3001') ? '8081' : window.location.port;
        const wsUrl = `${protocol}//${hostname}:${port}`;
        
        console.log('WebSocket: Connecting to', wsUrl);
        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          console.log('WebSocket: Connected to progress server');
          this.reconnectAttempts = 0;
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            
            if (data.type === 'progress') {
              // Find subscribers for this progress update
              this.subscribers.forEach((callback, generationId) => {
                // Call callback for all subscribers (they can filter by their own ID)
                callback(data);
              });
            }
          } catch (error) {
            console.error('WebSocket: Message parsing error', error);
          }
        };

        this.ws.onclose = (event) => {
          console.log('WebSocket: Connection closed', event.code, event.reason);
          
          // Attempt to reconnect unless explicitly closed
          if (event.code !== 1000 && this.reconnectAttempts < this.maxReconnectAttempts) {
            setTimeout(() => {
              this.reconnectAttempts++;
              console.log(`WebSocket: Reconnect attempt ${this.reconnectAttempts}`);
              this.connect();
            }, this.reconnectInterval * this.reconnectAttempts);
          }
        };

        this.ws.onerror = (error) => {
          console.error('WebSocket: Connection error', error);
          reject(error);
        };

      } catch (error) {
        console.error('WebSocket: Failed to create connection', error);
        reject(error);
      }
    });
  }

  subscribe(generationId, progressCallback) {
    
    // Store the callback
    this.subscribers.set(generationId, progressCallback);
    
    // Ensure we're connected
    this.connect().then(() => {
      // Send subscription message to server
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'subscribe',
          generationId: generationId
        }));
      }
    }).catch(error => {
      console.error('WebSocket: Failed to subscribe', error);
    });
  }

  unsubscribe(generationId) {
    this.subscribers.delete(generationId);
  }

  disconnect() {
    if (this.ws) {
      this.ws.close(1000, 'Client disconnecting');
      this.ws = null;
    }
    this.subscribers.clear();
  }

  isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
}

// Export singleton instance
export const websocketService = new WebSocketService();
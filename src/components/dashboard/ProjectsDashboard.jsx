import { Button } from '../common/Button';
import { PlusCircle, Trash2 } from '../common/Icons';

export const ProjectsDashboard = ({ projects, createNewProject, deleteProject, selectProject }) => (
  <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Animation Studio</h1>
        <p className="mt-4 text-lg text-gray-400">Your projects are saved in your browser's local storage.</p>
      </header>
      <div className="mb-8">
        <Button onClick={createNewProject}> 
          <PlusCircle size={20} /> New Project
        </Button>
      </div>
      <div className="space-y-4">
        {projects.length > 0 ? projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(p => (
          <div key={p.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 flex justify-between items-center transition hover:border-indigo-500">
            <div>
              <h2 className="text-xl font-bold text-white">{p.name}</h2>
              <p className="text-sm text-gray-400">{`By ${p.author || 'Unknown'} | ${p.totalPages || 0} Pages | Created: ${new Date(p.createdAt).toLocaleDateString()}`}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => selectProject(p.id)} variant="secondary">Open</Button>
              <Button onClick={() => deleteProject(p)} variant="danger"><Trash2 size={16} /></Button>
            </div>
          </div>
        )) : (
          <div className="text-center text-gray-500 border-2 border-dashed border-gray-700 rounded-lg p-12">
            <h3 className="text-xl font-medium text-gray-300">No projects yet</h3>
            <p className="mt-2">Click "New Project" to start creating your animation!</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
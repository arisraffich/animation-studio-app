import{r as q,a as gh,R as _h}from"./vendor-nf7bT_Uh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var xc={exports:{}},is={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=q,vh=Symbol.for("react.element"),Eh=Symbol.for("react.fragment"),wh=Object.prototype.hasOwnProperty,Th=yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ih={key:!0,ref:!0,__self:!0,__source:!0};function Rc(n,e,t){var r,s={},o=null,a=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)wh.call(e,r)&&!Ih.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:vh,type:n,key:o,ref:a,props:s,_owner:Th.current}}is.Fragment=Eh;is.jsx=Rc;is.jsxs=Rc;xc.exports=is;var m=xc.exports,Xs={},ua=gh;Xs.createRoot=ua.createRoot,Xs.hydrateRoot=ua.hydrateRoot;const qe=({onClick:n,children:e,disabled:t=!1,className:r="",variant:s="primary"})=>{const o="flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",a={primary:"text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500",secondary:"text-gray-200 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-500",danger:"text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400",warning:"bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-300"};return m.jsx("button",{onClick:n,disabled:t,className:`${o} ${a[s]} ${r}`,children:e})},Jn=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),m.jsx("path",{d:"M12 9v4"}),m.jsx("path",{d:"M12 17h.01"})]}),Ah=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("circle",{cx:"12",cy:"12",r:"10"}),m.jsx("path",{d:"M8 12h8"}),m.jsx("path",{d:"M12 8v8"})]}),Sc=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("path",{d:"M3 6h18"}),m.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),m.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),m.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),bh=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),m.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Cc=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}),m.jsx("path",{d:"M12 12v9"}),m.jsx("path",{d:"m16 16-4-4-4 4"})]}),os=({className:n,size:e=24})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:m.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),xh=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}),m.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"})]}),Pc=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}),m.jsx("path",{d:"M21 3v5h-5"}),m.jsx("path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}),m.jsx("path",{d:"M3 21v-5h5"})]}),Rh=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("path",{d:"M5 12h14"}),m.jsx("path",{d:"m12 5 7 7-7 7"})]}),Sh=({className:n,size:e=24})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:m.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),Ch=({className:n,size:e=24})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[m.jsx("path",{d:"m18 6-12 12"}),m.jsx("path",{d:"m6 6 12 12"})]}),Ph=({className:n,size:e=24})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:m.jsx("path",{d:"M20 6L9 17l-5-5"})}),Js=({checked:n=!1,onChange:e,disabled:t=!1,className:r="",size:s="md"})=>{const o={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},a={sm:12,md:16,lg:20};return m.jsx("button",{type:"button",onClick:e,disabled:t,className:`
        relative flex items-center justify-center rounded border-2 transition-all duration-200
        ${n?"bg-blue-600 border-blue-600 text-white":"bg-gray-800 border-gray-600 hover:border-gray-500"}
        ${t?"opacity-50 cursor-not-allowed":"cursor-pointer hover:scale-105"}
        ${o[s]}
        ${r}
      `,children:m.jsx("div",{className:`
        transition-all duration-200 flex items-center justify-center
        ${n?"opacity-100 scale-100":"opacity-0 scale-75"}
      `,children:m.jsx(Ph,{size:a[s],className:"text-white"})})})},Vh=({projects:n,createNewProject:e,deleteProject:t,selectProject:r,selectionMode:s=!1,selectedProjects:o=new Set,onEnterSelectionMode:a,onExitSelectionMode:l,onToggleProjectSelection:h,onToggleSelectAll:d,onBulkDelete:p})=>m.jsx("div",{className:"min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8",children:m.jsxs("div",{className:"max-w-4xl mx-auto",children:[m.jsxs("header",{className:"text-center mb-8",children:[m.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold text-white tracking-tight",children:"Animation Studio"}),m.jsx("p",{className:"mt-4 text-lg text-gray-400",children:"Your projects are saved in your browser's local storage."})]}),m.jsx("div",{className:"mb-8",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsxs(qe,{onClick:e,children:[m.jsx(Ah,{size:20})," New Project"]}),!s&&n.length>0&&m.jsx(qe,{onClick:a,variant:"secondary",children:"Select Projects"})]}),s&&m.jsxs("div",{className:"flex items-center gap-3",children:[n.length>0&&m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Js,{checked:o.size===n.length&&n.length>0,onChange:d}),m.jsxs("span",{className:"text-sm text-gray-400",children:["Select All (",o.size,"/",n.length,")"]})]}),m.jsx(qe,{onClick:l,variant:"secondary",children:"Cancel"}),o.size>0&&m.jsxs(qe,{onClick:p,variant:"danger",children:["Delete Selected (",o.size,")"]})]})]})}),m.jsx("div",{className:"space-y-4",children:n.length>0?n.sort((v,E)=>new Date(E.createdAt)-new Date(v.createdAt)).map(v=>m.jsxs("div",{className:`
              bg-gray-800/50 border rounded-xl p-4 flex items-center transition-all duration-200 cursor-pointer hover:bg-gray-800/70
              ${s&&o.has(v.id)?"border-blue-500 bg-blue-500/10":"border-gray-700 hover:border-indigo-500 hover:scale-[1.01]"}
            `,onClick:()=>s?h(v.id):r(v.id),children:[s&&m.jsx("div",{className:"mr-4 flex-shrink-0",children:m.jsx(Js,{checked:o.has(v.id),onChange:()=>h(v.id)})}),m.jsxs("div",{className:"flex-1",children:[m.jsx("h2",{className:"text-xl font-bold text-white",children:v.name}),m.jsx("p",{className:"text-sm text-gray-400",children:`By ${v.author||"Unknown"} | ${v.totalPages||0} Pages | Created: ${new Date(v.createdAt).toLocaleDateString()}`})]}),!s&&m.jsx("div",{className:"flex gap-2 flex-shrink-0",children:m.jsx(qe,{onClick:E=>{E.stopPropagation(),t(v)},variant:"danger",children:m.jsx(Sc,{size:16})})})]},v.id)):m.jsxs("div",{className:"text-center text-gray-500 border-2 border-dashed border-gray-700 rounded-lg p-12",children:[m.jsx("h3",{className:"text-xl font-medium text-gray-300",children:"No projects yet"}),m.jsx("p",{className:"mt-2",children:'Click "New Project" to start creating your animation!'})]})})]})}),Nh=({project:n,currentSceneId:e,setCurrentSceneId:t,goToDashboard:r})=>{const s=n.totalPages>0?["cover",...Array.from({length:n.totalPages},(a,l)=>String(l+1)),"end"]:[],o=s.findIndex(a=>!n.scenes[a]||n.scenes[a].status!=="completed");return m.jsxs("nav",{className:"w-full md:w-64 bg-gray-900/50 border-b md:border-b-0 md:border-r border-gray-800 p-4 flex flex-col",children:[m.jsxs(qe,{onClick:r,variant:"secondary",className:"mb-6",children:[m.jsx(bh,{size:16})," Dashboard"]}),s.length>0&&m.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Project Pages"}),m.jsx("ul",{className:"space-y-2",children:s.map((a,l)=>{const h=a===e,d=o!==-1&&l>o;let p="";return a==="cover"?p="Cover":a==="end"?p="End Scene":p=`Page ${a}`,m.jsx("li",{children:m.jsx("button",{onClick:()=>!d&&t(a),disabled:d,className:`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${h?"bg-indigo-600 text-white":"text-gray-300 hover:bg-gray-700"} ${d?"opacity-50 cursor-not-allowed":""}`,children:p})},a)})})]})},Dh=({initialTitle:n,initialAuthor:e,onConfirm:t,onCancel:r})=>{const[s,o]=q.useState(n),[a,l]=q.useState(e),h=()=>{t({confirmedTitle:s,confirmedAuthor:a})};return m.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50",children:m.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-md w-full mx-4",children:[m.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Review and Confirm"}),m.jsx("p",{className:"text-sm text-gray-400 mb-6",children:"Please correct the extracted Title and Author before creating the project."}),m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"title",className:"block mb-2 text-sm font-medium text-gray-300",children:"Book Title"}),m.jsx("input",{type:"text",id:"title",value:s,onChange:d=>o(d.target.value),className:"w-full p-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"author",className:"block mb-2 text-sm font-medium text-gray-300",children:"Author Name"}),m.jsx("input",{type:"text",id:"author",value:a,onChange:d=>l(d.target.value),className:"w-full p-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"})]})]}),m.jsxs("div",{className:"flex justify-end gap-3 mt-8",children:[m.jsx(qe,{onClick:r,variant:"secondary",children:"Cancel"}),m.jsx(qe,{onClick:h,variant:"primary",children:"Confirm and Create Project"})]})]})})},kh={name:"story_content_extraction",schema:{type:"object",properties:{story_pages:{type:"array",description:"An array of objects, where each object represents a page containing the main story narrative.",items:{type:"object",properties:{page_number:{type:"number",description:"The original page number from the PDF."},text:{type:"string",description:"The narrative text from this page."}},required:["page_number","text"],additionalProperties:!1}}},required:["story_pages"],additionalProperties:!1}},Oh={name:"animation_prompt_generation",schema:{type:"object",properties:{page_number:{type:"number"},scene_summary:{type:"string"},animation_style:{type:"object",properties:{style:{type:"string"},color_palette:{type:"string"},tone:{type:"string"}},required:["style","color_palette","tone"],additionalProperties:!1},scene:{type:"object",properties:{location:{type:"string"},time_of_day:{type:"string"},environment_details:{type:"string"}},required:["location","time_of_day","environment_details"],additionalProperties:!1},characters:{type:"array",items:{type:"object",properties:{character_id:{type:"string",description:"A unique, simple, lowercase ID for the character (e.g., 'mikey', 'grandfather')."},description:{type:"string",description:"A detailed visual description of the character's appearance and clothing."},initial_expression:{type:"string",description:"The character's primary emotion or expression at the start of the scene."},is_present_in_scene:{type:"boolean",description:"Set to true if the character is visually present in the illustration for this specific page, otherwise set to false."}},required:["character_id","description","initial_expression","is_present_in_scene"],additionalProperties:!1}},camera:{type:"object",properties:{shot_type:{type:"string"},movement:{type:"string"}},required:["shot_type","movement"],additionalProperties:!1},action:{type:"object",properties:{primary_action:{type:"string"},subtle_motions:{type:"string"}},required:["primary_action","subtle_motions"],additionalProperties:!1},metadata:{type:"object",properties:{estimated_duration_seconds:{type:"number"},notes:{type:"string"}},required:["estimated_duration_seconds","notes"],additionalProperties:!1},extracted_title:{type:"string"},extracted_author:{type:"string"}},required:["page_number","scene_summary","animation_style","scene","characters","camera","action","metadata"],additionalProperties:!1}},jh=async(n,e)=>{const r={model:"gpt-4o-2024-08-06",messages:[{role:"user",content:`You are a literary assistant. Analyze the following pages from a children's book and extract the main story content.

TASK: Identify which pages contain the primary narrative story (not title pages, copyright pages, or back matter).

PAGES TO ANALYZE:
${n.map(s=>`Page ${s.pageNum}: "${s.text}"`).join(`
`)}

RULES:
- Include only pages with main story narrative
- Exclude title pages, copyright, acknowledgments, etc.
- Keep original page numbers
- Preserve the exact text content`}],response_format:{type:"json_schema",json_schema:kh},max_tokens:2e3,temperature:.7};try{const s=await fetch("/api/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!s.ok){const a=await s.text();throw new Error(`OpenAI API Error: ${s.status} ${s.statusText} - ${a}`)}const o=await s.json();if(o.choices&&o.choices.length>0&&o.choices[0].message.content){const a=JSON.parse(o.choices[0].message.content);return console.log("OpenAI Structured Output - Story Content:",a),a.story_pages}else throw console.error("OpenAI Response for story content was empty or invalid:",o),new Error("OpenAI returned an empty or invalid response for story content.")}catch(s){throw console.error("Error in findStoryContent:",s),e(s.message),s}},Mh=(n,e,t)=>{var o;const r=((o=n.scenes[e])==null?void 0:o.text)||"";let s="";return e==="cover"?s="This is the COVER SCENE. Focus on creating a cinematic title sequence that captures the essence of the book while maintaining the illustration's composition.":e==="end"?s="This is the final scene. Create a gentle, concluding animation that provides closure and evokes a feeling of happy resolution.":s=`This is Page ${e} of the story. Create a video prompt that brings this specific scene to life.`,`You are a professional animation director specializing in children's book video adaptations. Your job is to create a single, cinematic video prompt that brings this illustration to life while preserving its artistic composition and maintaining story context.

CRITICAL RULES:
1. PRESERVE COMPOSITION: Maintain the illustration's exact camera angle, shot type (wide/medium/close-up), and visual framing. DO NOT change what the illustrator created.
2. ADD LIFE THROUGH MOTION: Introduce gentle, natural movements that enhance the scene without overwhelming it.
3. MAINTAIN STORY TONE: Keep the emotional atmosphere and pacing appropriate for this moment in the story.
4. CHILDREN'S CONTENT: All motion should be gentle, peaceful, and appropriate for young audiences.
5. FOLLOW USER INSTRUCTIONS: If the user provides specific instructions in the scene text, YOU MUST incorporate them EXACTLY as requested. Do not ignore user requirements.

ANALYSIS STEPS:
1. Identify the shot type shown in the illustration (wide establishing shot, medium shot, close-up, etc.)
2. Observe the main subjects and their positioning
3. Note the environmental elements that could have gentle motion
4. Consider the story context and emotional tone
5. Determine appropriate subtle character movements if any

OUTPUT FORMAT:
[Shot type matching illustration] Main scene description with gentle motion added. Environmental atmosphere and lighting. Subtle secondary movements.

MOTION GUIDELINES:
- Environmental: leaves rustling, water flowing, clouds drifting, grass swaying
- Character: breathing, blinking, slight head movements, natural posture shifts  
- Atmospheric: soft lighting changes, gentle shadows, mist or steam
- Avoid: sudden movements, dramatic changes, anything startling or intense

EXAMPLE OUTPUTS:
- [Wide establishing shot] A cozy cottage sits in a meadow as morning mist gently rises from the grass. Soft sunlight filters through nearby trees, casting dappled shadows. Chimney smoke drifts lazily upward while wildflowers sway softly in the breeze.
- [Medium close-up shot] A curious rabbit sits by a babbling brook, ears twitching slightly as it listens to the water. Dappled sunlight shifts gently through overhead branches. Small ripples move across the brook's surface while nearby flowers bob softly.

CONTEXT PROVIDED:
- Full Story: ${n.storyText}
- Current Scene Text: "${r}"
- Scene ID: ${e}
- Task: ${s}

IMPORTANT: Pay special attention to any SPECIFIC INSTRUCTIONS in the scene text. If the user has added requirements like "keep the toy the same size", "maintain object proportions", or any other specific directives, you MUST incorporate these into your video prompt.

Now analyze the provided illustration and create a single video prompt that brings it to life while preserving its artistic vision AND following any user-specified requirements.

Your response should be ONLY the video prompt text - no explanations, no additional text, no JSON structure.`},Lh=(n,e,t)=>{var d;const r=`You are a precise and detail-oriented animation director. Your primary goal is to create a structured JSON animation prompt from a children's book page.
  
**CRITICAL RULES:**
1.  **Character Presence is Gospel:** The illustration is the ONLY source of truth for determining WHICH CHARACTERS ARE VISUALLY PRESENT. For every known character in the story's glossary, you MUST include them in the 'characters' array and set 'is_present_in_scene' to 'true' or 'false' based ONLY on who you can see in the current illustration. Do not add characters who are not visible.
2.  **Character Identity & Decomposition:** Decompose group descriptions (e.g., "a family") into individual character objects. If a new name appears in the text (e.g., "Poppy"), first determine if it is a nickname for an existing character from the glossary before creating a new one. Assign simple, consistent, lowercase character_ids (e.g., 'mike', 'dad', 'grandfather').
3.  **Metadata, Not On-Screen Text:** The 'character_id' field is a metadata tag for tracking. It MUST NOT be rendered as visible text in the final video.
4.  **Dynamic and Cinematic Animation:** Describe camera movements and character actions with dynamic, evocative, and cinematic language to create an engaging result.`;let s="";const o=((d=n.scenes[e])==null?void 0:d.text)||"";let a=`### Established Story Context
`;const l={};let h=null;if(Object.values(n.scenes).forEach(p=>{p.status==="completed"&&p.prompt&&p.prompt.characters&&(p.prompt.characters.forEach(v=>{v.character_id&&!l[v.character_id]&&(l[v.character_id]=v.description)}),!h&&p.prompt.animation_style&&(h=p.prompt.animation_style))}),Object.keys(l).length>0){a+=`
**Character Glossary:**
`;for(const[p,v]of Object.entries(l))a+=`- ${p}: ${v}
`}else a+=`
No characters have been established yet.
`;return h&&(a+=`
**Animation Style Guide:**
- Style: ${h.style}
- Tone: ${h.tone}
- Palette: ${h.color_palette}
`),e==="cover"?s=`This is the COVER SCENE. Your task is to generate a structured and visually dynamic title sequence.
    1.  **Extract Main Info:** Identify the main book Title and the Author's name. Populate the top-level 'extracted_title' and 'extracted_author' fields. IGNORE all other text like 'Illustrated by' or small taglines.
    2.  **Describe the Overall Scene:** Crucially, analyze the visual elements of the cover illustration (characters, setting, mood). Describe a dynamic, animated version of this scene in the main 'action', 'scene', and 'animation_style' fields. Make it engaging and hint at the story's themes. Do not leave 'subtle_motions' as 'None'. For example, describe an animated background based on the cover art.
    3.  **Build Animation Timeline:** Create a 'title_sequence' array with separate, sequential steps for the title and author. Use an ORDERLY animation style like 'reveal word by word' or 'gentle fade-in' and AVOID chaotic, scattered effects. The author's animation MUST start after the title's animation ends. For multi-line titles, create a separate step for each line.
    4.  **Add Director's Note:** In the 'metadata.notes' field, add a note to ensure the final text layout is clean and visually appealing, without duplicated or overlapping words.`:e==="end"?s="This is the final scene. Generate a concluding animation prompt. Use the Character Glossary to create a gentle, summary scene evoking a feeling of happy resolution.":s=`Analyze the attached illustration and its corresponding text for Page ${e}. Generate a detailed animation prompt. Strictly follow all rules in the System Instruction, especially the 'Roll Call' for character presence based on the illustration.`,`
    ${r}
    ---
    ${a}
    ---
    FULL STORY NARRATIVE:
    ${n.storyText}
    ---
    CURRENT SCENE ANALYSIS TASK:
    - Scene ID: ${e}
    - Scene Text: "${o}"
    - Task: ${s}
    Now, populate the JSON schema based on all the rules and context provided.
  `},Vc=(n,e)=>{const t=n/e;return t>=.9&&t<=1.1?"1:1":t<.9?t<=.5?"9:21":t<=.65?"9:16":"3:4":t>1.1?t>=2.2?"21:9":t>=1.4?"16:9":"4:3":"16:9"},Fh=async(n,e,t,r)=>{const s=Vc(t.width,t.height),o={input:{prompt:e,image:`data:image/jpeg;base64,${n}`,resolution:"1080p",aspect_ratio:s,duration:5,fps:24,camera_fixed:!0}};try{const a=await fetch("/api/seedance/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok){const h=await a.text();throw new Error(`Seedance API Error: ${a.status} ${a.statusText} - ${h}`)}return(await a.json()).id}catch(a){throw console.error("Error creating Seedance task:",a),r(`Failed to create video generation task: ${a.message}`),a}},Uh=async(n,e)=>{try{const t=await fetch(`/api/seedance/status/${n}`,{headers:{"Content-Type":"application/json"}});if(!t.ok){const s=await t.text();throw new Error(`Seedance Status Error: ${t.status} ${t.statusText} - ${s}`)}return await t.json()}catch(t){throw console.error("Error polling Seedance task:",t),e(`Failed to check video generation status: ${t.message}`),t}},Bh=async(n,e,t,r,s,o,a={})=>{const{imageDimensions:l=null}=a;o("Creating animation...");const h=await $h(n,e,t,r,s);if(!l)throw new Error("Image dimensions are required for Seedance generation");const d=Vc(l.width,l.height);console.log(`Image dimensions: ${l.width}x${l.height}, using aspect ratio: ${d}`),console.log(`Generated Seedance prompt: "${h}"`),o("Starting video generation...");const p=await Fh(t,h,l,s);o("Processing video (this may take a few minutes)..."),await new Promise(x=>setTimeout(x,1e4));let v=0;const E=60;for(;v<E;){const x=await Uh(p,s);if(x.status==="succeeded"&&x.output)return{prompt:h,video_url:x.output,prediction_id:p,model:"seedance",aspect_ratio:d,resolution:"1080p"};if(x.status==="failed"){const N=x.error||"Unknown error";throw new Error(`Seedance generation failed: ${N}`)}else if(x.status==="canceled")throw new Error("Seedance generation was canceled");let S;v<5?S=10+v*3:v<15?S=22+(v-5)*2:v<30?S=42+(v-15)*1.5:v<45?S=64+(v-30)*1:S=Math.min(95,79+(v-45)*.5),o(`Generating video... ${Math.round(S)}%`),await new Promise(N=>setTimeout(N,1e4)),v++}throw new Error("Seedance generation timed out after 10 minutes")},$h=async(n,e,t,r,s)=>{const a={model:"gpt-4o",messages:[{role:"user",content:[{type:"text",text:Mh(n,e)},...t?[{type:"image_url",image_url:{url:`data:image/jpeg;base64,${t}`}}]:[]]}],max_tokens:300,temperature:.7};try{const l=await fetch("/api/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!l.ok){const d=await l.text();throw new Error(`OpenAI API Error: ${l.status} ${l.statusText} - ${d}`)}const h=await l.json();if(h.choices&&h.choices.length>0&&h.choices[0].message.content)return h.choices[0].message.content.trim();throw console.error("OpenAI Response was empty or invalid:",h),new Error("OpenAI returned an empty or invalid response.")}catch(l){throw console.error("Error in generateSeedancePrompt:",l),s(l.message),l}},Zs=async(n,e,t,r,s)=>{const a={model:"gpt-4o-2024-08-06",messages:[{role:"user",content:[{type:"text",text:Lh(n,e)},...t?[{type:"image_url",image_url:{url:`data:image/jpeg;base64,${t}`}}]:[]]}],response_format:{type:"json_schema",json_schema:Oh},max_tokens:2e3,temperature:.7};try{const l=await fetch("/api/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!l.ok){const d=await l.text();throw new Error(`OpenAI API Error: ${l.status} ${l.statusText} - ${d}`)}const h=await l.json();if(h.choices&&h.choices.length>0&&h.choices[0].message.content){const d=JSON.parse(h.choices[0].message.content);return console.log("OpenAI Structured Output - Animation Prompt:",d),d}else throw console.error("OpenAI Response was empty or invalid:",h),new Error("OpenAI returned an empty or invalid response.")}catch(l){throw console.error("Error in generateScene:",l),s(l.message),l}},qh=({project:n,updateProject:e,setCurrentSceneId:t,setError:r})=>{const[s,o]=q.useState(!1),[a,l]=q.useState(""),[h,d]=q.useState(null),[p,v]=q.useState(null),E=async S=>{const N=S.target.files[0];if(N){d(N),o(!0),r("");try{l("Extracting text from PDF...");let V="",F=null;const L=[];if(N.type==="application/pdf"){if(!window.pdfjsLib)throw new Error("PDF parsing library not loaded.");const I=await N.arrayBuffer(),A=await window.pdfjsLib.getDocument(I).promise;for(let ze=1;ze<=A.numPages;ze++){const Ge=await(await A.getPage(ze)).getTextContent();L.push({pageNum:ze,text:Ge.items.map(rt=>rt.str).join(" ")})}l("Extracting cover image...");const _=await A.getPage(1),de=_.getViewport({scale:1}),be=document.createElement("canvas");be.height=de.height,be.width=de.width,await _.render({canvasContext:be.getContext("2d"),viewport:de}).promise,V=be.toDataURL("image/jpeg",.7).split(",")[1],F={width:de.width,height:de.height,aspectRatio:de.width/de.height}}else throw new Error("Unsupported file type. Please upload a PDF file.");l("Analyzing story content...");const M=await jh(L,r);if(!M||M.length===0)throw new Error("AI could not identify the main story pages in the document.");const H=M.length,ae=M.map(I=>I.text).join(`

`),K={cover:{status:"pending"},end:{status:"pending"}};M.forEach((I,A)=>{K[String(A+1)]={status:"pending",text:I.text}});const w={...n,storyText:ae,totalPages:H,scenes:K,pageDimensions:F};l("Generating opening scene...");const g=await Zs(w,"cover",V,"",r),y=g.extracted_title||N.name.replace(/\.pdf$/i,"")||"Untitled Project",T=g.extracted_author||"Unknown Author";v({initialProjectState:w,newPrompt:g,aiGuessedTitle:y,aiGuessedAuthor:T})}catch(V){r(V.message),o(!1)}}},x=({confirmedTitle:S,confirmedAuthor:N})=>{const{initialProjectState:V,newPrompt:F}=p;F.extracted_title=S,F.extracted_author=N;const L={...V.scenes,cover:{status:"completed",prompt:F}},M={...V,scenes:L,name:S,author:N};e(n.id,M),t("cover"),v(null),o(!1)};return m.jsxs(m.Fragment,{children:[p&&m.jsx(Dh,{initialTitle:p.aiGuessedTitle,initialAuthor:p.aiGuessedAuthor,onConfirm:x,onCancel:()=>{v(null),o(!1)}}),m.jsxs("div",{className:"bg-gray-800/50 p-6 rounded-lg",children:[m.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Upload Your Book's Layout"}),m.jsx("p",{className:"text-gray-400 mb-4",children:"Upload your book's layout as a PDF. The app will extract the text, use the first page as the cover, and automatically generate the opening scene."}),m.jsxs("label",{htmlFor:"story-upload",className:"flex flex-col items-center justify-center w-full h-48 border-2 border-gray-600 border-dashed rounded-lg bg-gray-800/50 transition cursor-pointer hover:bg-gray-700/50",children:[s?m.jsxs(m.Fragment,{children:[m.jsx(os,{className:"animate-spin text-indigo-400",size:32}),m.jsx("p",{className:"mt-2 text-indigo-300",children:a})]}):m.jsxs(m.Fragment,{children:[m.jsx(Cc,{size:32}),m.jsx("p",{className:"mt-2",children:h?h.name:"Click to upload"}),m.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"PDF file only"})]}),m.jsx("input",{id:"story-upload",type:"file",className:"hidden",accept:".pdf,application/pdf",onChange:E,disabled:s})]})]})]})},zh=({sceneId:n,sceneData:e,project:t,showUploadCard:r=!1,onImageUpload:s=null,uploadImageBase64:o=null,isUploading:a=!1,uploadLoadingMessage:l="Generating...",isRegenerating:h=!1,onDeleteVersion:d=null,selectionMode:p=!1,selectedVersions:v=new Set,onToggleVersionSelection:E=null,onBulkDelete:x=null})=>{var ne,ie;const[S,N]=q.useState(null),[V,F]=q.useState(!1),[L,M]=q.useState(!1),H=q.useRef(null),ae=(e==null?void 0:e.videoVersions)||[],K=e==null?void 0:e.storedImage;let w=ae;ae.length===0&&((ne=e==null?void 0:e.prompt)!=null&&ne.video_url)&&(w=[{id:"legacy",version:1,createdAt:e.createdAt||new Date().toISOString(),prompt:e.prompt,isLatest:!0}]);const y=[...w.filter(D=>{var $;return($=D.prompt)==null?void 0:$.video_url})];r&&y.push({id:"upload",version:w.length+1,isUploadCard:!0});const T=D=>{D.preventDefault(),M(!0)},I=D=>{D.preventDefault(),M(!1)},A=D=>{D.preventDefault(),M(!1);const $=D.dataTransfer.files;if($.length>0&&s){const X=$[0];X.type.startsWith("image/")&&s(X)}},_=D=>{var $;D.isUploadCard&&!o&&!a?($=H.current)==null||$.click():D.isUploadCard||be(D)},de=D=>{const $=D.target.files[0];$&&s&&s($)};q.useEffect(()=>{const D=$=>{$.key==="Escape"&&V&&F(!1)};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[V]);const be=D=>{N(D),F(!0)},ze=()=>{F(!1),N(null)},ge=D=>{if(t!=null&&t.pageDimensions){const{aspectRatio:X}=t.pageDimensions;return X>=.9&&X<=1.1?"aspect-square":X>1.1?X>=1.7&&X<=1.8?"aspect-video":X>=1.3&&X<1.4?"aspect-[4/3]":X>=1.4&&X<1.7?"aspect-[3/2]":"aspect-video":X>=.55&&X<=.57?"aspect-[9/16]":X>=.74&&X<=.76?"aspect-[3/4]":X>=.65&&X<.74?"aspect-[2/3]":"aspect-[3/4]"}const $=D.prompt;if($!=null&&$.aspect_ratio)switch($.aspect_ratio){case"1:1":return"aspect-square";case"16:9":return"aspect-video";case"9:16":return"aspect-[9/16]";case"4:3":return"aspect-[4/3]";case"3:4":return"aspect-[3/4]";case"21:9":return"aspect-[21/9]";case"9:21":return"aspect-[9/21]";default:return"aspect-video"}return"aspect-video"},Ge=D=>D===1?"grid-cols-1 max-w-xs":D===2?"grid-cols-2 max-w-lg gap-4":"grid-cols-3 max-w-2xl gap-4",rt=(D,$)=>{var at;const X=ge(D);if(D.isUploadCard){if(a){const He=l.match(/(\d+)%/),Sn=He?parseInt(He[1]):0;return m.jsx("div",{className:`bg-gray-900 border border-gray-700 rounded-xl overflow-hidden ${X}`,children:m.jsxs("div",{className:"relative w-full h-full",children:[o&&m.jsx("img",{src:`data:image/jpeg;base64,${o}`,alt:"Processing",className:"w-full h-full object-cover opacity-50"}),m.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm px-4",children:[m.jsx(os,{className:"animate-spin mb-2 text-blue-400",size:24}),m.jsx("p",{className:"text-white font-medium text-sm text-center leading-tight",children:l})]}),m.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-gray-700",children:m.jsx("div",{className:"h-1 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 ease-out",style:{width:`${Sn}%`}})})]})},D.id)}return o?m.jsxs("div",{className:`bg-gray-900 border border-gray-700 rounded-xl overflow-hidden ${X}`,children:[m.jsxs("div",{className:"relative w-full h-full",children:[m.jsx("img",{src:`data:image/jpeg;base64,${o}`,alt:"Ready for generation",className:"w-full h-full object-cover"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200",children:m.jsx("div",{className:"absolute bottom-2 left-2",children:m.jsx("span",{className:"bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-xs",children:"Ready"})})})]}),m.jsx("div",{className:"absolute top-2 left-2",children:m.jsxs("span",{className:"bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full",children:["v",D.version]})})]},D.id):h?m.jsxs("div",{className:`
              relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-500/30 rounded-xl cursor-pointer transition-all duration-300 w-full
              hover:border-blue-400/50 hover:from-blue-900/30 hover:to-blue-800/20
              ${X}
            `,onClick:()=>_(D),style:{minHeight:"120px"},children:[m.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-6",children:[m.jsx("div",{className:"text-blue-400 mb-3",children:m.jsx(Pc,{size:48,className:"animate-spin-slow"})}),m.jsx("p",{className:"font-medium text-blue-300 text-center leading-tight",children:"Ready to regenerate"}),m.jsx("p",{className:"text-blue-400/70 text-sm mt-1 text-center",children:"with existing image"})]}),m.jsx("div",{className:"absolute top-2 left-2",children:m.jsxs("span",{className:"bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full",children:["v",D.version]})})]},D.id):m.jsxs("div",{className:`
            relative bg-gray-900 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 w-full
            ${L?"border-blue-400 bg-blue-500/10 scale-105":"border-gray-600 hover:border-gray-500 animate-pulse-subtle"}
            ${X}
          `,onDragOver:T,onDragLeave:I,onDrop:A,onClick:()=>_(D),style:{minHeight:"120px"},children:[m.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-6",children:[m.jsx("div",{className:`transition-all duration-300 ${L?"scale-110 text-blue-400":"text-gray-400"}`,children:m.jsx(Cc,{size:48,className:"mb-3"})}),m.jsx("p",{className:`font-medium transition-colors duration-300 ${L?"text-blue-400":"text-gray-300"}`,children:L?"Drop to upload":"Drop image here"}),m.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse"})]}),m.jsx("div",{className:"absolute top-2 left-2",children:m.jsxs("span",{className:"bg-gray-700 text-gray-300 px-2 py-1 text-xs font-medium rounded-full",children:["v",D.version]})})]},D.id)}const Ue=K!=null&&K.base64?`data:image/jpeg;base64,${K.base64}`:((at=D.prompt)==null?void 0:at.cover_url)||"",en=v.has(D.id);return m.jsxs("div",{className:`bg-gray-900 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer group ${X} ${p?en?"border-2 border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20":"border-2 border-gray-700 hover:border-blue-400":"border border-gray-700 hover:border-blue-500"}`,onClick:()=>{p&&E?E(D.id):_(D)},children:[m.jsxs("div",{className:"relative w-full h-full",children:[m.jsx("img",{className:"w-full h-full bg-gray-800 object-cover",src:Ue,alt:"Video thumbnail"}),m.jsx("video",{className:"hidden",muted:!0,preload:"metadata",children:m.jsx("source",{src:D.prompt.video_url,type:"video/mp4"})}),m.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:m.jsx("div",{className:"bg-black/30 backdrop-blur-sm rounded-full p-2 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200",children:m.jsx(Sh,{size:20,className:"text-white fill-current ml-0.5"})})}),m.jsx("div",{className:"absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"}),p?m.jsx("div",{className:"absolute top-2 left-2 z-10",onClick:He=>{He.stopPropagation(),E&&E(D.id)},children:m.jsx(Js,{checked:en,onChange:He=>{He&&He.stopPropagation&&He.stopPropagation(),E&&E(D.id)},className:"shadow-2xl ring-2 ring-white/50",size:"lg"})}):m.jsx("div",{className:"absolute top-2 left-2",children:m.jsxs("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${D.isLatest?"bg-blue-500 text-white":"bg-gray-700 text-gray-300"}`,children:["v",D.version]})}),!p&&m.jsx("div",{className:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:m.jsx("button",{onClick:He=>{He.stopPropagation(),d&&d(D.id)},className:"bg-red-500/90 hover:bg-red-500 text-white p-1.5 rounded-full transition-colors duration-200","aria-label":`Delete version ${D.version}`,children:m.jsx(Sc,{size:14})})})]}),m.jsx("div",{className:"p-3",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("span",{className:"text-sm text-gray-400",children:["Version ",D.version]}),m.jsx("span",{className:"text-xs text-gray-500",children:new Date(D.createdAt).toLocaleDateString()})]})})]},D.id)};return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:`grid gap-4 ${Ge(y.length)}`,children:y.map((D,$)=>rt(D))}),m.jsx("input",{ref:H,type:"file",className:"hidden",accept:"image/*",onChange:de}),V&&S&&m.jsx("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4",children:m.jsxs("div",{className:"relative w-full max-w-4xl mx-auto",children:[m.jsx("button",{onClick:ze,className:"absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10","aria-label":"Close video",children:m.jsx(Ch,{size:32})}),m.jsxs("div",{className:"bg-gray-900 rounded-xl overflow-hidden shadow-2xl",children:[m.jsxs("video",{className:"w-full h-auto max-h-[70vh] bg-black",controls:!0,autoPlay:!0,poster:K!=null&&K.base64?`data:image/jpeg;base64,${K.base64}`:((ie=S.prompt)==null?void 0:ie.cover_url)||"",children:[m.jsx("source",{src:S.prompt.video_url,type:"video/mp4"}),"Your browser does not support the video tag."]}),m.jsx("div",{className:"p-4 bg-gray-800 border-t border-gray-700",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsxs("h4",{className:"text-white font-medium",children:[n==="cover"?"Cover":n==="end"?"End Scene":`Page ${n}`," - Version ",S.version]}),m.jsxs("p",{className:"text-gray-400 text-sm mt-1",children:["Created ",new Date(S.createdAt).toLocaleString()]})]}),S.isLatest&&m.jsx("span",{className:"bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full",children:"Latest"})]})})]})]})})]})},Nc=({project:n,projects:e=[],onConfirm:t,onCancel:r,isDeleting:s=!1,deleteProgress:o="",deleteError:a=null})=>{const h=e.length>0?e:n?[n]:[];if(h.length===0)return null;const d=h.length>1;return m.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50",children:m.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-sm w-full mx-4 transition-all duration-300",children:[!s&&!a&&m.jsxs("div",{className:"text-center",children:[m.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[m.jsx(Jn,{className:"h-5 w-5 text-red-400 flex-shrink-0"}),m.jsx("h3",{className:"text-lg font-bold text-white",children:d?`Delete ${h.length} Projects`:"Delete Project"})]}),m.jsxs("div",{className:"text-center mb-6 px-4",children:[m.jsx("p",{className:"text-sm text-gray-400 mb-3",children:d?`Are you sure you want to delete these ${h.length} projects? This action cannot be undone.`:"Are you sure you want to delete this project? This action cannot be undone."}),d&&m.jsx("div",{className:"mt-3 max-h-32 overflow-y-auto bg-gray-900 rounded p-2",children:h.map((p,v)=>m.jsxs("div",{className:"text-xs text-gray-300 py-1",children:["• ",p.name]},p.id))})]}),m.jsxs("div",{className:"flex justify-center gap-3",children:[m.jsx(qe,{onClick:r,variant:"secondary",children:"Cancel"}),m.jsx(qe,{onClick:t,variant:"danger",children:"Delete"})]})]}),s&&!a&&m.jsxs("div",{className:"text-center",children:[m.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[m.jsx(os,{className:"h-5 w-5 text-blue-400 animate-spin flex-shrink-0"}),m.jsx("h3",{className:"text-lg font-bold text-white",children:d?`Deleting ${h.length} Projects`:"Deleting Project"})]}),m.jsx("p",{className:"text-sm text-gray-400 text-center mb-4 px-4",children:o||"Please wait while we delete your project..."}),m.jsx("div",{className:"w-full bg-gray-700 rounded-full h-1",children:m.jsx("div",{className:"bg-blue-500 h-1 rounded-full animate-pulse w-3/4 transition-all duration-1000"})})]}),a&&m.jsxs("div",{className:"text-center",children:[m.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[m.jsx(Jn,{className:"h-5 w-5 text-red-400 flex-shrink-0"}),m.jsx("h3",{className:"text-lg font-bold text-white",children:"Delete Failed"})]}),m.jsx("p",{className:"text-sm text-gray-400 text-center mb-6 px-4",children:a}),m.jsxs("div",{className:"flex justify-center gap-3",children:[m.jsx(qe,{onClick:r,variant:"secondary",children:"Close"}),m.jsx(qe,{onClick:t,variant:"danger",children:"Retry"})]})]})]})})},Dc=({sceneId:n,project:e,updateProject:t,setError:r,isRegenerating:s,onCancelRegeneration:o})=>{var Lt,nn,rn;const[a,l]=q.useState(""),[h,d]=q.useState(null),[p,v]=q.useState(!1),[E,x]=q.useState("Generating..."),[S,N]=q.useState(((Lt=e.scenes[n])==null?void 0:Lt.text)||""),[V,F]=q.useState(!1),[L,M]=q.useState(new Set),[H,ae]=q.useState([]),[K,w]=q.useState(!1),[g,y]=q.useState(""),[T,I]=q.useState(null);q.useEffect(()=>{var Y;const Q=((Y=e.scenes[n])==null?void 0:Y.text)||"";N(Q)},[(nn=e.scenes[n])==null?void 0:nn.text,n]);const A=e.scenes[n],_=(A==null?void 0:A.videoVersions)||[],be=_.filter(Q=>{var Y;return(Y=Q.prompt)==null?void 0:Y.video_url}).length>0,ze=((rn=A==null?void 0:A.prompt)==null?void 0:rn.video_url)&&_.length===0,ge=A==null?void 0:A.storedImage,Ge=(ge==null?void 0:ge.base64)&&(ge==null?void 0:ge.dimensions),[rt,ne]=q.useState(!1),ie=Q=>{const Y=new FileReader;Y.onloadend=()=>{const W=new Image;W.onload=()=>{const We={width:W.width,height:W.height};d(We);const Ke=document.createElement("canvas"),ye=Ke.getContext("2d"),le=1024,Re=1024;let Ie=W.width,pe=W.height;Ie>pe?Ie>le&&(pe*=le/Ie,Ie=le):pe>Re&&(Ie*=Re/pe,pe=Re),Ke.width=Ie,Ke.height=pe,ye.drawImage(W,0,0,Ie,pe),l(Ke.toDataURL("image/jpeg",.8).split(",")[1])},W.src=Y.result},Y.readAsDataURL(Q)},D=async()=>{let Q=a,Y=h;if(s&&!a&&Ge&&(Q=ge.base64,Y=ge.dimensions,l(ge.base64),d(ge.dimensions),ne(!0)),n!=="end"&&!Q){r("Please upload an image first.");return}v(!0),x("Preparing..."),r("");try{let W;const We={...e,scenes:{...e.scenes,[n]:{...e.scenes[n],text:S}}};if(n!=="cover"&&n!=="end")try{W=await Bh(We,n,Q,"",r,x,{imageDimensions:Y})}catch(tt){console.log("Seedance video generation failed, using JSON only:",tt.message),r(`Video generation failed: ${tt.message}. Generated prompt without video.`),x("Creating scene data..."),W=await Zs(We,n,Q,"",r),W.video_generation_failed=!0}else W=await Zs(We,n,Q,"",r);const Ke=e.scenes[n]||{},ye=Ke.videoVersions||[],le={id:Date.now(),version:ye.length+1,createdAt:new Date().toISOString(),prompt:W,isLatest:!0},Re=ye.map(tt=>({...tt,isLatest:!1}));Re.push(le);let pe={scenes:{...e.scenes,[n]:{...Ke,status:"completed",prompt:W,text:S,videoVersions:Re,storedImage:Ke.storedImage||(Q?{base64:Q,dimensions:Y,uploadedAt:new Date().toISOString()}:null)}}};n==="cover"&&W.extracted_title&&(pe.name=W.extracted_title,pe.author=W.extracted_author||"Unknown Author"),t(e.id,pe),l(""),d(null),o()}catch(W){r(`Operation failed: ${W.message}.`)}finally{v(!1)}},$=async Q=>{var Y;try{const W=e.scenes[n]||{},Ke=(W.videoVersions||[]).filter(ye=>ye.id!==Q);if(Ke.length===0){const ye={...e.scenes,[n]:{text:"",status:"pending"}};await t(e.id,{scenes:ye})}else{const ye=Ke.map(Re=>({...Re,isLatest:!1}));if(ye.length>0){const Re=Math.max(...ye.map(pe=>pe.version)),Ie=ye.find(pe=>pe.version===Re);Ie&&(Ie.isLatest=!0)}const le={...e.scenes,[n]:{...W,videoVersions:ye,prompt:((Y=ye.find(Re=>Re.isLatest))==null?void 0:Y.prompt)||W.prompt}};await t(e.id,{scenes:le})}}catch(W){console.error("Error deleting video version:",W),r(`Failed to delete video version: ${W.message}`)}},X=Q=>{M(Y=>{const W=new Set(Y);return W.has(Q)?W.delete(Q):W.add(Q),W})},Ue=()=>{const Q=_.filter(Y=>{var W;return(W=Y.prompt)==null?void 0:W.video_url});L.size===Q.length?M(new Set):M(new Set(Q.map(Y=>Y.id)))},en=()=>{F(!0),M(new Set)},at=()=>{F(!1),M(new Set)},He=()=>{if(L.size===0)return;const W=((e.scenes[n]||{}).videoVersions||[]).filter(We=>L.has(We.id));ae(W)},Sn=async()=>{var Q;try{w(!0),I(null);const W=H.length>1?`${H.length} video versions`:"video version";y(`Preparing to delete ${W}...`),await new Promise(le=>setTimeout(le,500)),y("Removing video files..."),await new Promise(le=>setTimeout(le,800)),y(`Deleting ${W}...`);const We=e.scenes[n]||{},ye=(We.videoVersions||[]).filter(le=>!L.has(le.id));if(ye.length===0){const le={...e.scenes,[n]:{text:"",status:"pending"}};await t(e.id,{scenes:le})}else{const le=ye.map(Ie=>({...Ie,isLatest:!1}));if(le.length>0){const Ie=Math.max(...le.map(tt=>tt.version)),pe=le.find(tt=>tt.version===Ie);pe&&(pe.isLatest=!0)}const Re={...e.scenes,[n]:{...We,videoVersions:le,prompt:((Q=le.find(Ie=>Ie.isLatest))==null?void 0:Q.prompt)||We.prompt}};await t(e.id,{scenes:Re})}y("Cleaning up..."),ae([]),w(!1),y(""),at()}catch(Y){console.error("Error bulk deleting versions:",Y),w(!1),y(""),I(`Failed to delete video versions: ${Y.message}`)}},tn=()=>{ae([]),w(!1),y(""),I(null)};return m.jsxs(m.Fragment,{children:[m.jsx(Nc,{projects:H.map(Q=>({id:Q.id,name:`Version ${Q.version}`})),onConfirm:Sn,onCancel:tn,isDeleting:K,deleteProgress:g,deleteError:T}),m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{children:[be||ze?m.jsx("div",{className:"flex items-center gap-3 mb-4",children:V?m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsxs("button",{onClick:Ue,className:"flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors duration-200",children:[m.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[m.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",strokeWidth:"2"}),L.size===_.filter(Q=>{var Y;return(Y=Q.prompt)==null?void 0:Y.video_url}).length?m.jsx("path",{d:"m9 12 2 2 4-4",strokeWidth:"2"}):m.jsx("path",{d:"M12 8v8M8 12h8",strokeWidth:"2"})]}),L.size===_.filter(Q=>{var Y;return(Y=Q.prompt)==null?void 0:Y.video_url}).length?"Deselect All":"Select All"]}),L.size>0&&m.jsxs("button",{onClick:He,className:"flex items-center gap-2 text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors duration-200",children:[m.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h0M10 11v6M14 11v6",strokeWidth:"2"})}),"Delete (",L.size,")"]}),m.jsxs("button",{onClick:at,className:"flex items-center gap-2 text-sm bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors duration-200",children:[m.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M6 18L18 6M6 6l12 12",strokeWidth:"2"})}),"Cancel"]})]}):m.jsxs("button",{onClick:en,className:"flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-200",children:[m.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[m.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",strokeWidth:"2"}),m.jsx("path",{d:"m9 12 2 2 4-4",strokeWidth:"2"})]}),"Select Videos"]})}):null,m.jsx(zh,{sceneId:n,sceneData:A,project:e,showUploadCard:s||!be&&!ze,onImageUpload:ie,uploadImageBase64:a,isUploading:p,uploadLoadingMessage:E,isRegenerating:s,onDeleteVersion:$,selectionMode:V,selectedVersions:L,onToggleVersionSelection:X})]}),(s||!be&&!ze)&&m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"scene-text",className:"block mb-3 font-medium text-gray-300",children:"Scene Text"}),m.jsx("textarea",{id:"scene-text",value:S,onChange:Q=>N(Q.target.value),placeholder:"Enter the scene text for video generation...",className:"w-full h-24 p-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition text-gray-300 resize-none"})]}),m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("button",{onClick:D,disabled:p||!a&&!(s&&Ge),className:"bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors",children:p?"Generating...":"Generate Scene"}),s&&m.jsx("button",{onClick:o,className:"text-gray-400 hover:text-gray-300 text-sm underline transition-colors",children:"Cancel"})]})]})]})]})},Gh=({sceneId:n,project:e,updateProject:t,setCurrentSceneId:r,setError:s})=>{const o=e.scenes[n],[a,l]=q.useState(!1),[h,d]=q.useState(""),p=()=>{if(!(o!=null&&o.prompt))return;const x=JSON.stringify(o.prompt,null,2),S=document.createElement("textarea");S.value=x,S.style.position="fixed",S.style.opacity="0",document.body.appendChild(S),S.focus(),S.select();try{document.execCommand("copy"),d("Copied!")}catch(N){d("Failed!"),console.error("Fallback: Oops, unable to copy",N)}document.body.removeChild(S),setTimeout(()=>d(""),2e3)},E=(()=>{const x=["cover",...Array.from({length:e.totalPages},(N,V)=>String(V+1)),"end"],S=x.findIndex(N=>N===n);return x[S+1]})();return m.jsxs("div",{className:"bg-gray-800/50 p-6 rounded-lg",children:[m.jsxs("div",{className:"flex flex-wrap gap-4 items-center mb-4 pb-4 border-b border-gray-700",children:[m.jsxs(qe,{onClick:p,variant:"primary",children:[m.jsx(xh,{size:16})," ",h||"Copy Prompt"]}),m.jsxs(qe,{onClick:()=>l(x=>!x),variant:"warning",children:[m.jsx(Pc,{size:16})," ",a?"Cancel":"Regenerate"]}),E&&m.jsxs(qe,{onClick:()=>r(E),variant:"secondary",children:["Go to Next Scene ",m.jsx(Rh,{size:16})]})]}),m.jsx("div",{children:m.jsx(Dc,{sceneId:n,project:e,updateProject:t,setError:s,isRegenerating:a,onCancelRegeneration:()=>l(!1)})})]})},Hh=({sceneId:n,project:e,updateProject:t,setError:r})=>m.jsx("div",{className:"bg-gray-800/50 p-6 rounded-lg",children:m.jsx("div",{children:m.jsx(Dc,{sceneId:n,project:e,updateProject:t,setError:r,isRegenerating:!1,onCancelRegeneration:()=>{}})})}),Wh=({project:n,updateProject:e,currentSceneId:t,setCurrentSceneId:r,setError:s})=>{const o=n.scenes[t];return n.storyText?o&&o.status==="completed"?m.jsx(Gh,{sceneId:t,project:n,updateProject:e,setCurrentSceneId:r,setError:s}):m.jsx(Hh,{sceneId:t,project:n,updateProject:e,setError:s}):m.jsx(qh,{project:n,updateProject:e,setCurrentSceneId:r,setError:s})},Kh=({project:n,updateProject:e,goToDashboard:t,libraryError:r})=>{const[s,o]=q.useState("cover"),[a,l]=q.useState("");return q.useEffect(()=>{if(n.storyText){const d=["cover",...Array.from({length:n.totalPages},(p,v)=>String(v+1)),"end"].find(p=>!n.scenes[p]||n.scenes[p].status!=="completed");o(d||"end")}else o("cover")},[n.id]),m.jsxs("div",{className:"min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col md:flex-row",children:[m.jsx(Nh,{project:n,currentSceneId:s,setCurrentSceneId:o,goToDashboard:t}),m.jsxs("main",{className:"flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto",style:{maxHeight:"100vh"},children:[a&&m.jsxs("div",{className:"w-full bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-4 flex gap-2",children:[m.jsx(Jn,{className:"flex-shrink-0"}),m.jsxs("p",{children:[m.jsx("span",{className:"font-bold",children:"Error: "}),a]})]}),r&&m.jsxs("div",{className:"w-full bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-4 flex gap-2",children:[m.jsx(Jn,{className:"flex-shrink-0"}),m.jsxs("p",{children:[m.jsx("span",{className:"font-bold",children:"Library Error: "}),r]})]}),m.jsx(Wh,{project:n,updateProject:e,currentSceneId:s,setCurrentSceneId:o,setError:l})]})]})},Qh=()=>{};var ha={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Yh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|l>>4;let E=(l&15)<<2|d>>6,x=d&63;h||(x=64,a||(E=64)),r.push(t[p],t[v],t[E],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||v==null)throw new Xh;const E=o<<2|l>>4;if(r.push(E),d!==64){const x=l<<4&240|d>>2;if(r.push(x),v!==64){const S=d<<6&192|v;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jh=function(n){const e=kc(n);return Oc.encodeByteArray(e,!0)},Hr=function(n){return Jh(n).replace(/\./g,"")},Zh=function(n){try{return Oc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=()=>ed().__FIREBASE_DEFAULTS__,nd=()=>{if(typeof process>"u"||typeof ha>"u")return;const n=ha.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zh(n[1]);return e&&JSON.parse(e)},xi=()=>{try{return Qh()||td()||nd()||rd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sd=n=>{var e,t;return(t=(e=xi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},jc=n=>{const e=sd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mc=()=>{var n;return(n=xi())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Hr(JSON.stringify(t)),Hr(JSON.stringify(a)),""].join(".")}const Wn={};function od(){const n={prod:[],emulator:[]};for(const e of Object.keys(Wn))Wn[e]?n.emulator.push(e):n.prod.push(e);return n}function ad(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let da=!1;function Uc(n,e){if(typeof window>"u"||typeof document>"u"||!lr(window.location.host)||Wn[n]===e||Wn[n]||da)return;Wn[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=od().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function h(E,x){E.setAttribute("width","24"),E.setAttribute("id",x),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{da=!0,a()},E}function p(E,x){E.setAttribute("id",x),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function v(){const E=ad(r),x=t("text"),S=document.getElementById(x)||document.createElement("span"),N=t("learnmore"),V=document.getElementById(N)||document.createElement("a"),F=t("preprendIcon"),L=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const M=E.element;l(M),p(V,N);const H=d();h(L,F),M.append(L,S,V,H),document.body.appendChild(M)}o?(S.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){var e;const n=(e=xi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ud(){return!ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hd(){try{return typeof indexedDB=="object"}catch{return!1}}function dd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="FirebaseError";class Yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fd,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bc.prototype.create)}}class Bc{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?pd(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Yt(s,l,r)}}function pd(n,e){return n.replace(md,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const md=/\{\$([^}]+)}/g;function Wr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(fa(o)&&fa(a)){if(!Wr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function fa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){return n&&n._delegate?n._delegate:n}class mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new id;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yd(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_d(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(n){return n===qt?void 0:n}function yd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Ed={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},wd=te.INFO,Td={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Id=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Td[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=wd,this._logHandler=Id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Ad=(n,e)=>e.some(t=>n instanceof t);let pa,ma;function bd(){return pa||(pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xd(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qc=new WeakMap,ei=new WeakMap,zc=new WeakMap,Us=new WeakMap,Ri=new WeakMap;function Rd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(bt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&qc.set(t,n)}).catch(()=>{}),Ri.set(e,n),e}function Sd(n){if(ei.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ei.set(n,e)}let ti={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ei.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Cd(n){ti=n(ti)}function Pd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Bs(this),e,...t);return zc.set(r,e.sort?e.sort():[e]),bt(r)}:xd().includes(n)?function(...e){return n.apply(Bs(this),e),bt(qc.get(this))}:function(...e){return bt(n.apply(Bs(this),e))}}function Vd(n){return typeof n=="function"?Pd(n):(n instanceof IDBTransaction&&Sd(n),Ad(n,bd())?new Proxy(n,ti):n)}function bt(n){if(n instanceof IDBRequest)return Rd(n);if(Us.has(n))return Us.get(n);const e=Vd(n);return e!==n&&(Us.set(n,e),Ri.set(e,n)),e}const Bs=n=>Ri.get(n);function Nd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=bt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(bt(a.result),h.oldVersion,h.newVersion,bt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Dd=["get","getKey","getAll","getAllKeys","count"],kd=["put","add","delete","clear"],$s=new Map;function ga(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($s.get(e))return $s.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=kd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dd.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&h.done]))[0]};return $s.set(e,o),o}Cd(n=>({...n,get:(e,t,r)=>ga(e,t)||n.get(e,t,r),has:(e,t)=>!!ga(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ni="@firebase/app",_a="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new $c("@firebase/app"),Md="@firebase/app-compat",Ld="@firebase/analytics-compat",Fd="@firebase/analytics",Ud="@firebase/app-check-compat",Bd="@firebase/app-check",$d="@firebase/auth",qd="@firebase/auth-compat",zd="@firebase/database",Gd="@firebase/data-connect",Hd="@firebase/database-compat",Wd="@firebase/functions",Kd="@firebase/functions-compat",Qd="@firebase/installations",Yd="@firebase/installations-compat",Xd="@firebase/messaging",Jd="@firebase/messaging-compat",Zd="@firebase/performance",ef="@firebase/performance-compat",tf="@firebase/remote-config",nf="@firebase/remote-config-compat",rf="@firebase/storage",sf="@firebase/storage-compat",of="@firebase/firestore",af="@firebase/ai",cf="@firebase/firestore-compat",lf="firebase",uf="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]",hf={[ni]:"fire-core",[Md]:"fire-core-compat",[Fd]:"fire-analytics",[Ld]:"fire-analytics-compat",[Bd]:"fire-app-check",[Ud]:"fire-app-check-compat",[$d]:"fire-auth",[qd]:"fire-auth-compat",[zd]:"fire-rtdb",[Gd]:"fire-data-connect",[Hd]:"fire-rtdb-compat",[Wd]:"fire-fn",[Kd]:"fire-fn-compat",[Qd]:"fire-iid",[Yd]:"fire-iid-compat",[Xd]:"fire-fcm",[Jd]:"fire-fcm-compat",[Zd]:"fire-perf",[ef]:"fire-perf-compat",[tf]:"fire-rc",[nf]:"fire-rc-compat",[rf]:"fire-gcs",[sf]:"fire-gcs-compat",[of]:"fire-fst",[cf]:"fire-fst-compat",[af]:"fire-vertex","fire-js":"fire-js",[lf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,df=new Map,si=new Map;function ya(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if(si.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;si.set(e,n);for(const t of Kr.values())ya(t,n);for(const t of df.values())ya(t,n);return!0}function Gc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Hc(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Bc("app","Firebase",ff);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=uf;function Kc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ri,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(t||(t=Mc()),!t)throw xt.create("no-options");const o=Kr.get(s);if(o){if(Wr(t,o.options)&&Wr(r,o.config))return o;throw xt.create("duplicate-app",{appName:s})}const a=new vd(s);for(const h of si.values())a.addComponent(h);const l=new pf(t,r,a);return Kr.set(s,l),l}function Qc(n=ri){const e=Kr.get(n);if(!e&&n===ri&&Mc())return Kc();if(!e)throw xt.create("no-app",{appName:n});return e}function Rt(n,e,t){let r=hf[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}Zn(new mn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="firebase-heartbeat-database",gf=1,er="firebase-heartbeat-store";let qs=null;function Yc(){return qs||(qs=Nd(mf,gf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(er)}catch(t){console.warn(t)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),qs}async function _f(n){try{const t=(await Yc()).transaction(er),r=await t.objectStore(er).get(Xc(n));return await t.done,r}catch(e){if(e instanceof Yt)_t.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function va(n,e){try{const r=(await Yc()).transaction(er,"readwrite");await r.objectStore(er).put(e,Xc(n)),await r.done}catch(t){if(t instanceof Yt)_t.warn(t.message);else{const r=xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function Xc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=1024,vf=30;class Ef{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ea();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>vf){const a=If(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ea(),{heartbeatsToSend:r,unsentEntries:s}=wf(this._heartbeatsCache.heartbeats),o=Hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return _t.warn(t),""}}}function Ea(){return new Date().toISOString().substring(0,10)}function wf(n,e=yf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),wa(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Tf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hd()?dd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _f(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wa(n){return Hr(JSON.stringify({version:2,heartbeats:n})).length}function If(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n){Zn(new mn("platform-logger",e=>new Od(e),"PRIVATE")),Zn(new mn("heartbeat",e=>new Ef(e),"PRIVATE")),Rt(ni,_a,n),Rt(ni,_a,"esm2020"),Rt("fire-js","")}Af("");var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var St,Jc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(T,I,A){for(var _=Array(arguments.length-2),de=2;de<arguments.length;de++)_[de-2]=arguments[de];return g.prototype[I].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(I=0;16>I;++I)T[I]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],I=w.g[2];var A=w.g[3],_=g+(A^y&(I^A))+T[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(I^A&(y^I))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(y^I^A)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(I^(y|~A))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,T=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=y;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<g;)if(T[I++]=w.charCodeAt(A++),I==this.blockSize){s(this,T),I=0;break}}else for(;A<g;)if(T[I++]=w[A++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)w[y++]=this.g[g]>>>T&255;return w};function o(w,g){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function a(w,g){this.h=g;for(var y=[],T=!0,I=w.length-1;0<=I;I--){var A=w[I]|0;T&&A==g||(y[I]=A,T=!1)}this.g=y}var l={};function h(w){return-128<=w&&128>w?o(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return V(d(-w));for(var g=[],y=1,T=0;w>=y;T++)g[T]=w/y|0,y*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return V(p(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),T=v,I=0;I<w.length;I+=8){var A=Math.min(8,w.length-I),_=parseInt(w.substring(I,I+A),g);8>A?(A=d(Math.pow(g,A)),T=T.j(A).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var v=h(0),E=h(1),x=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);w+=(0<=T?T:4294967296+T)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(N(this))return"-"+V(this).toString(w);for(var g=d(Math.pow(w,6)),y=this,T="";;){var I=H(y,g).g;y=F(y,I.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=I,S(y))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=F(this,w),N(w)?-1:S(w)?0:1};function V(w){for(var g=w.g.length,y=[],T=0;T<g;T++)y[T]=~w.g[T];return new a(y,~w.h).add(E)}n.abs=function(){return N(this)?V(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0,I=0;I<=g;I++){var A=T+(this.i(I)&65535)+(w.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);T=_>>>16,A&=65535,_&=65535,y[I]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function F(w,g){return w.add(V(g))}n.j=function(w){if(S(this)||S(w))return v;if(N(this))return N(w)?V(this).j(V(w)):V(V(this).j(w));if(N(w))return V(this.j(V(w)));if(0>this.l(x)&&0>w.l(x))return d(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<w.g.length;I++){var A=this.i(T)>>>16,_=this.i(T)&65535,de=w.i(I)>>>16,be=w.i(I)&65535;y[2*T+2*I]+=_*be,L(y,2*T+2*I),y[2*T+2*I+1]+=A*be,L(y,2*T+2*I+1),y[2*T+2*I+1]+=_*de,L(y,2*T+2*I+1),y[2*T+2*I+2]+=A*de,L(y,2*T+2*I+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function L(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function M(w,g){this.g=w,this.h=g}function H(w,g){if(S(g))throw Error("division by zero");if(S(w))return new M(v,v);if(N(w))return g=H(V(w),g),new M(V(g.g),V(g.h));if(N(g))return g=H(w,V(g)),new M(V(g.g),g.h);if(30<w.g.length){if(N(w)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,T=g;0>=T.l(w);)y=ae(y),T=ae(T);var I=K(y,1),A=K(T,1);for(T=K(T,2),y=K(y,2);!S(T);){var _=A.add(T);0>=_.l(w)&&(I=I.add(y),A=_),T=K(T,1),y=K(y,1)}return g=F(w,I.j(g)),new M(I,g)}for(I=v;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(y),_=A.j(g);N(_)||0<_.l(w);)y-=T,A=d(y),_=A.j(g);S(A)&&(A=E),I=I.add(A),w=F(w,_)}return new M(I,w)}n.A=function(w){return H(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&w.i(T);return new a(y,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|w.i(T);return new a(y,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^w.i(T);return new a(y,this.h^w.h)};function ae(w){for(var g=w.g.length+1,y=[],T=0;T<g;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(y,w.h)}function K(w,g){var y=g>>5;g%=32;for(var T=w.g.length-y,I=[],A=0;A<T;A++)I[A]=0<g?w.i(A+y)>>>g|w.i(A+y+1)<<32-g:w.i(A+y);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,St=a}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zc,qn,el,Ur,ii,tl,nl,rl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,u){return i==Array.prototype||i==Object.prototype||(i[c]=u.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof kr=="object"&&kr];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in u))break e;u=u[b]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&e(u,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var u=0,f=!1,b={next:function(){if(!f&&u<i.length){var R=u++;return{value:c(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,u){return i.call.apply(i.bind,arguments)}function v(i,c,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),i.apply(c,b)}}return function(){return i.apply(c,arguments)}}function E(i,c,u){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,E.apply(null,arguments)}function x(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,c){function u(){}u.prototype=c.prototype,i.aa=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,b,R){for(var k=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)k[oe-2]=arguments[oe];return c.prototype[b].apply(f,k)}}function N(i){const c=i.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function V(i,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const b=i.length||0,R=f.length||0;i.length=b+R;for(let k=0;k<R;k++)i[b+k]=f[k]}else i.push(f)}}class F{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(i){return/^[\s\xa0]*$/.test(i)}function M(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function H(i){return H[" "](i),i}H[" "]=function(){};var ae=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function K(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function w(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function g(i){const c={};for(const u in i)c[u]=i[u];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,c){let u,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(u in f)i[u]=f[u];for(let R=0;R<y.length;R++)u=y[R],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function I(i){var c=1;i=i.split(":");const u=[];for(;0<c&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function A(i){l.setTimeout(()=>{throw i},0)}function _(){var i=rt;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class de{constructor(){this.h=this.g=null}add(c,u){const f=be.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var be=new F(()=>new ze,i=>i.reset());class ze{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,Ge=!1,rt=new de,ne=()=>{const i=l.Promise.resolve(void 0);ge=()=>{i.then(ie)}};var ie=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(u){A(u)}var c=be;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}Ge=!1};function D(){this.s=this.s,this.C=this.C}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var X=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return i}();function Ue(i,c){if($.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(ae){e:{try{H(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:en[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ue.aa.h.call(this)}}S(Ue,$);var en={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var at="closure_listenable_"+(1e6*Math.random()|0),He=0;function Sn(i,c,u,f,b){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=b,this.key=++He,this.da=this.fa=!1}function tn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Lt(i){this.src=i,this.g={},this.h=0}Lt.prototype.add=function(i,c,u,f,b){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var k=rn(i,c,f,b);return-1<k?(c=i[k],u||(c.fa=!1)):(c=new Sn(c,this.src,R,!!f,b),c.fa=u,i.push(c)),c};function nn(i,c){var u=c.type;if(u in i.g){var f=i.g[u],b=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=b)&&Array.prototype.splice.call(f,b,1),R&&(tn(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function rn(i,c,u,f){for(var b=0;b<i.length;++b){var R=i[b];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return b}return-1}var Q="closure_lm_"+(1e6*Math.random()|0),Y={};function W(i,c,u,f,b){if(Array.isArray(c)){for(var R=0;R<c.length;R++)W(i,c[R],u,f,b);return null}return u=po(u),i&&i[at]?i.K(c,u,d(f)?!!f.capture:!1,b):We(i,c,u,!1,f,b)}function We(i,c,u,f,b,R){if(!c)throw Error("Invalid event type");var k=d(b)?!!b.capture:!!b,oe=pe(i);if(oe||(i[Q]=oe=new Lt(i)),u=oe.add(c,u,f,k,R),u.proxy)return u;if(f=Ke(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)X||(b=k),b===void 0&&(b=!1),i.addEventListener(c.toString(),f,b);else if(i.attachEvent)i.attachEvent(Re(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ke(){function i(u){return c.call(i.src,i.listener,u)}const c=Ie;return i}function ye(i,c,u,f,b){if(Array.isArray(c))for(var R=0;R<c.length;R++)ye(i,c[R],u,f,b);else f=d(f)?!!f.capture:!!f,u=po(u),i&&i[at]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],u=rn(R,u,f,b),-1<u&&(tn(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=pe(i))&&(c=i.g[c.toString()],i=-1,c&&(i=rn(c,u,f,b)),(u=-1<i?c[i]:null)&&le(u))}function le(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[at])nn(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(Re(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=pe(c))?(nn(u,i),u.h==0&&(u.src=null,c[Q]=null)):tn(i)}}}function Re(i){return i in Y?Y[i]:Y[i]="on"+i}function Ie(i,c){if(i.da)i=!0;else{c=new Ue(c,this);var u=i.listener,f=i.ha||i.src;i.fa&&le(i),i=u.call(f,c)}return i}function pe(i){return i=i[Q],i instanceof Lt?i:null}var tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function po(i){return typeof i=="function"?i:(i[tt]||(i[tt]=function(c){return i.handleEvent(c)}),i[tt])}function ke(){D.call(this),this.i=new Lt(this),this.M=this,this.F=null}S(ke,D),ke.prototype[at]=!0,ke.prototype.removeEventListener=function(i,c,u,f){ye(this,i,c,u,f)};function Be(i,c){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new $(c,i);else if(c instanceof $)c.target=c.target||i;else{var b=c;c=new $(f,i),T(c,b)}if(b=!0,u)for(var R=u.length-1;0<=R;R--){var k=c.g=u[R];b=yr(k,f,!0,c)&&b}if(k=c.g=i,b=yr(k,f,!0,c)&&b,b=yr(k,f,!1,c)&&b,u)for(R=0;R<u.length;R++)k=c.g=u[R],b=yr(k,f,!1,c)&&b}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var u=i.g[c],f=0;f<u.length;f++)tn(u[f]);delete i.g[c],i.h--}}this.F=null},ke.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},ke.prototype.L=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function yr(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,R=0;R<c.length;++R){var k=c[R];if(k&&!k.da&&k.capture==u){var oe=k.listener,Se=k.ha||k.src;k.fa&&nn(i.i,k),b=oe.call(Se,f)!==!1&&b}}return b&&!f.defaultPrevented}function mo(i,c,u){if(typeof i=="function")u&&(i=E(i,u));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function go(i){i.g=mo(()=>{i.g=null,i.i&&(i.i=!1,go(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class zu extends D{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:go(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(i){D.call(this),this.h=i,this.g={}}S(Cn,D);var _o=[];function yo(i){K(i.g,function(c,u){this.g.hasOwnProperty(u)&&le(c)},i),i.g={}}Cn.prototype.N=function(){Cn.aa.N.call(this),yo(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var As=l.JSON.stringify,Gu=l.JSON.parse,Hu=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function bs(){}bs.prototype.h=null;function vo(i){return i.h||(i.h=i.i())}function Eo(){}var Pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xs(){$.call(this,"d")}S(xs,$);function Rs(){$.call(this,"c")}S(Rs,$);var Ft={},wo=null;function vr(){return wo=wo||new ke}Ft.La="serverreachability";function To(i){$.call(this,Ft.La,i)}S(To,$);function Vn(i){const c=vr();Be(c,new To(c))}Ft.STAT_EVENT="statevent";function Io(i,c){$.call(this,Ft.STAT_EVENT,i),this.stat=c}S(Io,$);function $e(i){const c=vr();Be(c,new Io(c,i))}Ft.Ma="timingevent";function Ao(i,c){$.call(this,Ft.Ma,i),this.size=c}S(Ao,$);function Nn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function Wu(i,c,u,f,b,R){i.info(function(){if(i.g)if(R)for(var k="",oe=R.split("&"),Se=0;Se<oe.length;Se++){var re=oe[Se].split("=");if(1<re.length){var Oe=re[0];re=re[1];var je=Oe.split("_");k=2<=je.length&&je[1]=="type"?k+(Oe+"="+re+"&"):k+(Oe+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+c+`
`+u+`
`+k})}function Ku(i,c,u,f,b,R,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+c+`
`+u+`
`+R+" "+k})}function sn(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yu(i,u)+(f?" "+f:"")})}function Qu(i,c){i.info(function(){return"TIMEOUT: "+c})}Dn.prototype.info=function(){};function Yu(i,c){if(!i.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<b.length;k++)b[k]=""}}}}return As(u)}catch{return c}}var Er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ss;function wr(){}S(wr,bs),wr.prototype.g=function(){return new XMLHttpRequest},wr.prototype.i=function(){return{}},Ss=new wr;function wt(i,c,u,f){this.j=i,this.i=c,this.l=u,this.R=f||1,this.U=new Cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xo}function xo(){this.i=null,this.g="",this.h=!1}var Ro={},Cs={};function Ps(i,c,u){i.L=1,i.v=br(pt(c)),i.m=u,i.P=!0,So(i,null)}function So(i,c){i.F=Date.now(),Tr(i),i.A=pt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),$o(u.i,"t",f),i.C=0,u=i.j.J,i.h=new xo,i.g=oa(i.j,u?c:null,!i.m),0<i.O&&(i.M=new zu(E(i.Y,i,i.g),i.O)),c=i.U,u=i.g,f=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(_o[0]=b.toString()),b=_o);for(var R=0;R<b.length;R++){var k=W(u,b[R],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Vn(),Wu(i.i,i.u,i.A,i.l,i.R,i.m)}wt.prototype.ca=function(i){i=i.target;const c=this.M;c&&mt(i)==3?c.j():this.Y(i)},wt.prototype.Y=function(i){try{if(i==this.g)e:{const je=mt(this.g);var c=this.g.Ba();const cn=this.g.Z();if(!(3>je)&&(je!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||je!=4||c==7||(c==8||0>=cn?Vn(3):Vn(2)),Vs(this);var u=this.g.Z();this.X=u;t:if(Co(this)){var f=Qo(this.g);i="";var b=f.length,R=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),kn(this);var k="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(R&&c==b-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,Ku(this.i,this.u,this.A,this.l,this.R,je,u),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Se=this.g;if((oe=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(oe)){var re=oe;break t}}re=null}if(u=re)sn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ns(this,u);else{this.o=!1,this.s=3,$e(12),Ut(this),kn(this);break e}}if(this.P){u=!0;let st;for(;!this.J&&this.C<k.length;)if(st=Xu(this,k),st==Cs){je==4&&(this.s=4,$e(14),u=!1),sn(this.i,this.l,null,"[Incomplete Response]");break}else if(st==Ro){this.s=4,$e(15),sn(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else sn(this.i,this.l,st,null),Ns(this,st);if(Co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||k.length!=0||this.h.h||(this.s=1,$e(16),u=!1),this.o=this.o&&u,!u)sn(this.i,this.l,k,"[Invalid Chunked Response]"),Ut(this),kn(this);else if(0<k.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ls(Oe),Oe.M=!0,$e(11))}}else sn(this.i,this.l,k,null),Ns(this,k);je==4&&Ut(this),this.o&&!this.J&&(je==4?na(this.j,this):(this.o=!1,Tr(this)))}else ph(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),Ut(this),kn(this)}}}catch{}finally{}};function Co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Xu(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?Cs:(u=Number(c.substring(u,f)),isNaN(u)?Ro:(f+=1,f+u>c.length?Cs:(c=c.slice(f,f+u),i.C=f+u,c)))}wt.prototype.cancel=function(){this.J=!0,Ut(this)};function Tr(i){i.S=Date.now()+i.I,Po(i,i.I)}function Po(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Nn(E(i.ba,i),c)}function Vs(i){i.B&&(l.clearTimeout(i.B),i.B=null)}wt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Qu(this.i,this.A),this.L!=2&&(Vn(),$e(17)),Ut(this),this.s=2,kn(this)):Po(this,this.S-i)};function kn(i){i.j.G==0||i.J||na(i.j,i)}function Ut(i){Vs(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,yo(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Ns(i,c){try{var u=i.j;if(u.G!=0&&(u.g==i||Ds(u.h,i))){if(!i.K&&Ds(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Vr(u),Cr(u);else break e;Ms(u),$e(18)}}else u.za=b[1],0<u.za-u.T&&37500>b[2]&&u.F&&u.v==0&&!u.C&&(u.C=Nn(E(u.Za,u),6e3));if(1>=Do(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else $t(u,11)}else if((i.K||u.g==i)&&Vr(u),!L(c))for(b=u.Da.g.parse(c),c=0;c<b.length;c++){let re=b[c];if(u.T=re[0],re=re[1],u.G==2)if(re[0]=="c"){u.K=re[1],u.ia=re[2];const Oe=re[3];Oe!=null&&(u.la=Oe,u.j.info("VER="+u.la));const je=re[4];je!=null&&(u.Aa=je,u.j.info("SVER="+u.Aa));const cn=re[5];cn!=null&&typeof cn=="number"&&0<cn&&(f=1.5*cn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const st=i.g;if(st){const Dr=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dr){var R=f.h;R.g||Dr.indexOf("spdy")==-1&&Dr.indexOf("quic")==-1&&Dr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ks(R,R.h),R.h=null))}if(f.D){const Fs=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;Fs&&(f.ya=Fs,ue(f.I,f.D,Fs))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=ia(f,f.J?f.ia:null,f.W),k.K){ko(f.h,k);var oe=k,Se=f.L;Se&&(oe.I=Se),oe.B&&(Vs(oe),Tr(oe)),f.g=k}else ea(f);0<u.i.length&&Pr(u)}else re[0]!="stop"&&re[0]!="close"||$t(u,7);else u.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?$t(u,7):js(u):re[0]!="noop"&&u.l&&u.l.ta(re),u.v=0)}}Vn(4)}catch{}}var Ju=class{constructor(i,c){this.g=i,this.map=c}};function Vo(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function No(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Do(i){return i.h?1:i.g?i.g.size:0}function Ds(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ks(i,c){i.g?i.g.add(c):i.h=c}function ko(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Vo.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Oo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.D);return c}return N(i.i)}function Zu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],u=i.length,f=0;f<u;f++)c.push(i[f]);return c}c=[],u=0;for(f in i)c[u++]=i[f];return c}function eh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var u=0;u<i;u++)c.push(u);return c}c=[],u=0;for(const f in i)c[u++]=f;return c}}}function jo(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var u=eh(i),f=Zu(i),b=f.length,R=0;R<b;R++)c.call(void 0,f[R],u&&u[R],i)}var Mo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function th(i,c){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),b=null;if(0<=f){var R=i[u].substring(0,f);b=i[u].substring(f+1)}else R=i[u];c(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Bt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Bt){this.h=i.h,Ir(this,i.j),this.o=i.o,this.g=i.g,Ar(this,i.s),this.l=i.l;var c=i.i,u=new Mn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Lo(this,u),this.m=i.m}else i&&(c=String(i).match(Mo))?(this.h=!1,Ir(this,c[1]||"",!0),this.o=On(c[2]||""),this.g=On(c[3]||"",!0),Ar(this,c[4]),this.l=On(c[5]||"",!0),Lo(this,c[6]||"",!0),this.m=On(c[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}Bt.prototype.toString=function(){var i=[],c=this.j;c&&i.push(jn(c,Fo,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(jn(c,Fo,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(jn(u,u.charAt(0)=="/"?sh:rh,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",jn(u,oh)),i.join("")};function pt(i){return new Bt(i)}function Ir(i,c,u){i.j=u?On(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Ar(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Lo(i,c,u){c instanceof Mn?(i.i=c,ah(i.i,i.h)):(u||(c=jn(c,ih)),i.i=new Mn(c,i.h))}function ue(i,c,u){i.i.set(c,u)}function br(i){return ue(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function On(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function jn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,nh),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Fo=/[#\/\?@]/g,rh=/[#\?:]/g,sh=/[#\?]/g,ih=/[#\?@]/g,oh=/#/g;function Mn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Tt(i){i.g||(i.g=new Map,i.h=0,i.i&&th(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Mn.prototype,n.add=function(i,c){Tt(this),this.i=null,i=on(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Uo(i,c){Tt(i),c=on(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Bo(i,c){return Tt(i),c=on(i,c),i.g.has(c)}n.forEach=function(i,c){Tt(this),this.g.forEach(function(u,f){u.forEach(function(b){i.call(c,b,f,this)},this)},this)},n.na=function(){Tt(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const b=i[f];for(let R=0;R<b.length;R++)u.push(c[f])}return u},n.V=function(i){Tt(this);let c=[];if(typeof i=="string")Bo(this,i)&&(c=c.concat(this.g.get(on(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)c=c.concat(i[u])}return c},n.set=function(i,c){return Tt(this),this.i=null,i=on(this,i),Bo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function $o(i,c,u){Uo(i,c),0<u.length&&(i.i=null,i.g.set(on(i,c),N(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const R=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var b=R;k[f]!==""&&(b+="="+encodeURIComponent(String(k[f]))),i.push(b)}}return this.i=i.join("&")};function on(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function ah(i,c){c&&!i.j&&(Tt(i),i.i=null,i.g.forEach(function(u,f){var b=f.toLowerCase();f!=b&&(Uo(this,f),$o(this,b,u))},i)),i.j=c}function ch(i,c){const u=new Dn;if(l.Image){const f=new Image;f.onload=x(It,u,"TestLoadImage: loaded",!0,c,f),f.onerror=x(It,u,"TestLoadImage: error",!1,c,f),f.onabort=x(It,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=x(It,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function lh(i,c){const u=new Dn,f=new AbortController,b=setTimeout(()=>{f.abort(),It(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(b),R.ok?It(u,"TestPingServer: ok",!0,c):It(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),It(u,"TestPingServer: error",!1,c)})}function It(i,c,u,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(u)}catch{}}function uh(){this.g=new Hu}function hh(i,c,u){const f=u||"";try{jo(i,function(b,R){let k=b;d(b)&&(k=As(b)),c.push(f+R+"="+encodeURIComponent(k))})}catch(b){throw c.push(f+"type="+encodeURIComponent("_badmap")),b}}function xr(i){this.l=i.Ub||null,this.j=i.eb||!1}S(xr,bs),xr.prototype.g=function(){return new Rr(this.l,this.j)},xr.prototype.i=function(i){return function(){return i}}({});function Rr(i,c){ke.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Rr,ke),n=Rr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Fn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Ln(this):Fn(this),this.readyState==3&&qo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Ln(this))},n.Qa=function(i){this.g&&(this.response=i,Ln(this))},n.ga=function(){this.g&&Ln(this)};function Ln(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Fn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function Fn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function zo(i){let c="";return K(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Os(i,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=zo(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):ue(i,c,u))}function me(i){ke.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(me,ke);var dh=/^https?$/i,fh=["POST","PUT"];n=me.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ss.g(),this.v=this.o?vo(this.o):vo(Ss),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Go(this,R);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)u.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),b=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fh,c,void 0))||f||b||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of u)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ko(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Go(this,R)}};function Go(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,Ho(i),Sr(i)}function Ho(i){i.A||(i.A=!0,Be(i,"complete"),Be(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Be(this,"complete"),Be(this,"abort"),Sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},n.bb=function(){Wo(this)};function Wo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||mt(i)!=4||i.Z()!=2)){if(i.u&&mt(i)==4)mo(i.Ea,0,i);else if(Be(i,"readystatechange"),mt(i)==4){i.h=!1;try{const k=i.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=k===0){var b=String(i.D).match(Mo)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),f=!dh.test(b?b.toLowerCase():"")}u=f}if(u)Be(i,"complete"),Be(i,"success");else{i.m=6;try{var R=2<mt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Ho(i)}}finally{Sr(i)}}}}function Sr(i,c){if(i.g){Ko(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Be(i,"ready");try{u.onreadystatechange=f}catch{}}}function Ko(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function mt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Gu(c)}};function Qo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ph(i){const c={};i=(i.g&&2<=mt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(L(i[f]))continue;var u=I(i[f]);const b=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[b]||[];c[b]=R,R.push(u)}w(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function Yo(i){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,i),this.cb=Un("retryDelaySeedMs",1e4,i),this.Wa=Un("forwardChannelMaxRetries",2,i),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Vo(i&&i.concurrentRequestLimit),this.Da=new uh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yo.prototype,n.la=8,n.G=1,n.connect=function(i,c,u,f){$e(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=ia(this,null,this.W),Pr(this)};function js(i){if(Xo(i),i.G==3){var c=i.U++,u=pt(i.I);if(ue(u,"SID",i.K),ue(u,"RID",c),ue(u,"TYPE","terminate"),Bn(i,u),c=new wt(i,i.j,c),c.L=2,c.v=br(pt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=oa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Tr(c)}sa(i)}function Cr(i){i.g&&(Ls(i),i.g.cancel(),i.g=null)}function Xo(i){Cr(i),i.u&&(l.clearTimeout(i.u),i.u=null),Vr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Pr(i){if(!No(i.h)&&!i.s){i.s=!0;var c=i.Ga;ge||ne(),Ge||(ge(),Ge=!0),rt.add(c,i),i.B=0}}function mh(i,c){return Do(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Nn(E(i.Ga,i,c),ra(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new wt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=g(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Zo(this,b,c),u=pt(this.I),ue(u,"RID",i),ue(u,"CVER",22),this.D&&ue(u,"X-HTTP-Session-Id",this.D),Bn(this,u),R&&(this.O?c="headers="+encodeURIComponent(String(zo(R)))+"&"+c:this.m&&Os(u,this.m,R)),ks(this.h,b),this.Ua&&ue(u,"TYPE","init"),this.P?(ue(u,"$req",c),ue(u,"SID","null"),b.T=!0,Ps(b,u,null)):Ps(b,u,c),this.G=2}}else this.G==3&&(i?Jo(this,i):this.i.length==0||No(this.h)||Jo(this))};function Jo(i,c){var u;c?u=c.l:u=i.U++;const f=pt(i.I);ue(f,"SID",i.K),ue(f,"RID",u),ue(f,"AID",i.T),Bn(i,f),i.m&&i.o&&Os(f,i.m,i.o),u=new wt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Zo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ks(i.h,u),Ps(u,f,c)}function Bn(i,c){i.H&&K(i.H,function(u,f){ue(c,f,u)}),i.l&&jo({},function(u,f){ue(c,f,u)})}function Zo(i,c,u){u=Math.min(i.i.length,u);var f=i.l?E(i.l.Na,i.l,i):null;e:{var b=i.i;let R=-1;for(;;){const k=["count="+u];R==-1?0<u?(R=b[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let oe=!0;for(let Se=0;Se<u;Se++){let re=b[Se].g;const Oe=b[Se].map;if(re-=R,0>re)R=Math.max(0,b[Se].g-100),oe=!1;else try{hh(Oe,k,"req"+re+"_")}catch{f&&f(Oe)}}if(oe){f=k.join("&");break e}}}return i=i.i.splice(0,u),c.D=i,f}function ea(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;ge||ne(),Ge||(ge(),Ge=!0),rt.add(c,i),i.v=0}}function Ms(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Nn(E(i.Fa,i),ra(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ta(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Nn(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),Cr(this),ta(this))};function Ls(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function ta(i){i.g=new wt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=pt(i.qa);ue(c,"RID","rpc"),ue(c,"SID",i.K),ue(c,"AID",i.T),ue(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&ue(c,"TO",i.ja),ue(c,"TYPE","xmlhttp"),Bn(i,c),i.m&&i.o&&Os(c,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=br(pt(c)),u.m=null,u.P=!0,So(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Cr(this),Ms(this),$e(19))};function Vr(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function na(i,c){var u=null;if(i.g==c){Vr(i),Ls(i),i.g=null;var f=2}else if(Ds(i.h,c))u=c.D,ko(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var b=i.B;f=vr(),Be(f,new Ao(f,u)),Pr(i)}else ea(i);else if(b=c.s,b==3||b==0&&0<c.X||!(f==1&&mh(i,c)||f==2&&Ms(i)))switch(u&&0<u.length&&(c=i.h,c.i=c.i.concat(u)),b){case 1:$t(i,5);break;case 4:$t(i,10);break;case 3:$t(i,6);break;default:$t(i,2)}}}function ra(i,c){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*c}function $t(i,c){if(i.j.info("Error code "+c),c==2){var u=E(i.fb,i),f=i.Xa;const b=!f;f=new Bt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ir(f,"https"),br(f),b?ch(f.toString(),u):lh(f.toString(),u)}else $e(2);i.G=0,i.l&&i.l.sa(c),sa(i),Xo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function sa(i){if(i.G=0,i.ka=[],i.l){const c=Oo(i.h);(c.length!=0||i.i.length!=0)&&(V(i.ka,c),V(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function ia(i,c,u){var f=u instanceof Bt?pt(u):new Bt(u);if(f.g!="")c&&(f.g=c+"."+f.g),Ar(f,f.s);else{var b=l.location;f=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var R=new Bt(null);f&&Ir(R,f),c&&(R.g=c),b&&Ar(R,b),u&&(R.l=u),f=R}return u=i.D,c=i.ya,u&&c&&ue(f,u,c),ue(f,"VER",i.la),Bn(i,f),f}function oa(i,c,u){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new me(new xr({eb:u})):new me(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function aa(){}n=aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Nr(){}Nr.prototype.g=function(i,c){return new Je(i,c)};function Je(i,c){ke.call(this),this.g=new Yo(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!L(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new an(this)}S(Je,ke),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){js(this.g)},Je.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=As(i),i=u);c.i.push(new Ju(c.Ya++,i)),c.G==3&&Pr(c)},Je.prototype.N=function(){this.g.l=null,delete this.j,js(this.g),delete this.g,Je.aa.N.call(this)};function ca(i){xs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const u in c){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}S(ca,xs);function la(){Rs.call(this),this.status=1}S(la,Rs);function an(i){this.g=i}S(an,aa),an.prototype.ua=function(){Be(this.g,"a")},an.prototype.ta=function(i){Be(this.g,new ca(i))},an.prototype.sa=function(i){Be(this.g,new la)},an.prototype.ra=function(){Be(this.g,"b")},Nr.prototype.createWebChannel=Nr.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,rl=function(){return new Nr},nl=function(){return vr()},tl=Ft,ii={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,Ur=Er,bo.COMPLETE="complete",el=bo,Eo.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",ke.prototype.listen=ke.prototype.K,qn=Eo,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Zc=me}).apply(typeof kr<"u"?kr:typeof self<"u"?self:typeof window<"u"?window:{});const Ia="@firebase/firestore",Aa="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new $c("@firebase/firestore");function ln(){return Wt.logLevel}function j(n,...e){if(Wt.logLevel<=te.DEBUG){const t=e.map(Si);Wt.debug(`Firestore (${Tn}): ${n}`,...t)}}function yt(n,...e){if(Wt.logLevel<=te.ERROR){const t=e.map(Si);Wt.error(`Firestore (${Tn}): ${n}`,...t)}}function gn(n,...e){if(Wt.logLevel<=te.WARN){const t=e.map(Si);Wt.warn(`Firestore (${Tn}): ${n}`,...t)}}function Si(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,sl(n,r,t)}function sl(n,e,t){let r=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw yt(r),new Error(r)}function se(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||sl(e,s,r)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class xf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Rf{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new il(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class Sf{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cf{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Sf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ba{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hc(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){se(this.o===void 0,3512);const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ba(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ba(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Vf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function oi(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return zs(s)===zs(o)?J(s,o):zs(s)?1:-1}return J(n.length,e.length)}const Nf=55296,Df=57343;function zs(n){const e=n.charCodeAt(0);return e>=Nf&&e<=Df}function _n(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="__name__";class ct{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ct?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=ct.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return J(e.length,t.length)}static compareSegments(e,t){const r=ct.isNumericId(e),s=ct.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ct.extractNumericId(e).compare(ct.extractNumericId(t)):oi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return St.fromString(e.substring(4,e.length-2))}}class ce extends ct{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const kf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends ct{construct(e,t,r){return new Pe(e,t,r)}static isValidIdentifier(e){return kf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xa}static keyField(){return new Pe([xa])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ce.fromString(e))}static fromName(e){return new U(ce.fromString(e).popFirst(5))}static empty(){return new U(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Of(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ra(n){if(!U.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sa(n){if(U.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function al(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function as(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function vt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=as(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function ur(n,e){if(!al(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=-62135596800,Pa=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pa);return new he(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ca)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pa}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ur(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ca;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:we("string",he._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new he(0,0))}static max(){return new z(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=-1;function jf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Pt(s,U.empty(),e)}function Mf(n){return new Pt(n.readTime,n.key,tr)}class Pt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Pt(z.min(),U.empty(),tr)}static max(){return new Pt(z.max(),U.empty(),tr)}}function Lf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Ff)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Bf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function An(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=-1;function ls(n){return n==null}function Qr(n){return n===0&&1/n==-1/0}function $f(n){return typeof n=="number"&&Number.isInteger(n)&&!Qr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="";function qf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Va(e)),e=zf(n.get(t),e);return Va(e)}function zf(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case cl:t+="";break;default:t+=o}}return t}function Va(n){return n+cl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ll(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Or(this.root,e,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Or(this.root,e,this.comparator,!0)}}class Or{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??Ce.RED,this.left=s??Ce.EMPTY,this.right=o??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new Ce(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Da(this.data.getIterator())}getIteratorFrom(e){return new Da(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Da{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new Ae(Pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _n(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ul("Invalid base64 string: "+o):o}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const Gf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(n){if(se(!!n,39018),typeof n=="string"){let e=0;const t=Gf.exec(n);if(se(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Nt(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="server_timestamp",dl="__type__",fl="__previous_value__",pl="__local_write_time__";function Vi(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[dl])==null?void 0:r.stringValue)===hl}function us(n){const e=n.mapValue.fields[fl];return Vi(e)?us(e):e}function nr(n){const e=Vt(n.mapValue.fields[pl].timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,r,s,o,a,l,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Yr="(default)";class rr{constructor(e,t){this.projectId=e,this.database=t||Yr}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database===Yr}isEqual(e){return e instanceof rr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="__type__",Wf="__max__",jr={mapValue:{}},gl="__vector__",Xr="value";function Dt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vi(n)?4:Qf(n)?9007199254740991:Kf(n)?10:11:B(28295,{value:n})}function ft(n,e){if(n===e)return!0;const t=Dt(n);if(t!==Dt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return nr(n).isEqual(nr(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Vt(s.timestampValue),l=Vt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Nt(s.bytesValue).isEqual(Nt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=_e(s.doubleValue),l=_e(o.doubleValue);return a===l?Qr(a)===Qr(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return _n(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Na(a)!==Na(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!ft(a[h],l[h])))return!1;return!0}(n,e);default:return B(52216,{left:n})}}function sr(n,e){return(n.values||[]).find(t=>ft(t,e))!==void 0}function yn(n,e){if(n===e)return 0;const t=Dt(n),r=Dt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=_e(o.integerValue||o.doubleValue),h=_e(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return ka(n.timestampValue,e.timestampValue);case 4:return ka(nr(n),nr(e));case 5:return oi(n.stringValue,e.stringValue);case 6:return function(o,a){const l=Nt(o),h=Nt(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=J(l[d],h[d]);if(p!==0)return p}return J(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=J(_e(o.latitude),_e(a.latitude));return l!==0?l:J(_e(o.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Oa(n.arrayValue,e.arrayValue);case 10:return function(o,a){var E,x,S,N;const l=o.fields||{},h=a.fields||{},d=(E=l[Xr])==null?void 0:E.arrayValue,p=(x=h[Xr])==null?void 0:x.arrayValue,v=J(((S=d==null?void 0:d.values)==null?void 0:S.length)||0,((N=p==null?void 0:p.values)==null?void 0:N.length)||0);return v!==0?v:Oa(d,p)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===jr.mapValue&&a===jr.mapValue)return 0;if(o===jr.mapValue)return 1;if(a===jr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const E=oi(h[v],p[v]);if(E!==0)return E;const x=yn(l[h[v]],d[p[v]]);if(x!==0)return x}return J(h.length,p.length)}(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function ka(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Vt(n),r=Vt(e),s=J(t.seconds,r.seconds);return s!==0?s:J(t.nanos,r.nanos)}function Oa(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=yn(t[s],r[s]);if(o)return o}return J(t.length,r.length)}function vn(n){return ai(n)}function ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Nt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=ai(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ai(t.fields[a])}`;return s+"}"}(n.mapValue):B(61005,{value:n})}function Br(n){switch(Dt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=us(n);return e?16+Br(e):16;case 5:return 2*n.stringValue.length;case 6:return Nt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Br(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return jt(r.fields,(o,a)=>{s+=o.length+Br(a)}),s}(n.mapValue);default:throw B(13486,{value:n})}}function ja(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ci(n){return!!n&&"integerValue"in n}function Ni(n){return!!n&&"arrayValue"in n}function Ma(n){return!!n&&"nullValue"in n}function La(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $r(n){return!!n&&"mapValue"in n}function Kf(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ml])==null?void 0:r.stringValue)===gl}function Kn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Kn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kn(n.arrayValue.values[t]);return e}return{...n}}function Qf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!$r(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kn(t)}setAll(e){let t=Pe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Kn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());$r(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];$r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Ye(Kn(this.value))}}function _l(n){const e=[];return jt(n.fields,(t,r)=>{const s=new Pe([t]);if($r(r)){const o=_l(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,r,s,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Fe(e,0,z.min(),z.min(),z.min(),Ye.empty(),0)}static newFoundDocument(e,t,r,s){return new Fe(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new Fe(e,2,t,z.min(),z.min(),Ye.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,z.min(),z.min(),Ye.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.position=e,this.inclusive=t}}function Fa(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=yn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ua(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{}class Ee extends yl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jf(e,t,r):t==="array-contains"?new tp(e,r):t==="in"?new np(e,r):t==="not-in"?new rp(e,r):t==="array-contains-any"?new sp(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Zf(e,r):new ep(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yn(t,this.value)):t!==null&&Dt(this.value)===Dt(t)&&this.matchesComparison(yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends yl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return vl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function El(n){return Xf(n)&&vl(n)}function Xf(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function li(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+vn(n.value);if(El(n))return n.filters.map(e=>li(e)).join(",");{const e=n.filters.map(t=>li(t)).join(",");return`${n.op}(${e})`}}function wl(n,e){return n instanceof Ee?function(r,s){return s instanceof Ee&&r.op===s.op&&r.field.isEqual(s.field)&&ft(r.value,s.value)}(n,e):n instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&wl(a,s.filters[l]),!0):!1}(n,e):void B(19439)}function Tl(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${vn(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Tl).join(" ,")+"}"}(n):"Filter"}class Jf extends Ee{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zf extends Ee{constructor(e,t){super(e,"in",t),this.keys=Il("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ep extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Il("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Il(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class tp extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ni(t)&&sr(t.arrayValue,this.value)}}class np extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sr(this.value.arrayValue,t)}}class rp extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!sr(this.value.arrayValue,t)}}class sp extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ni(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>sr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t=null,r=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Ba(n,e=null,t=[],r=[],s=null,o=null,a=null){return new ip(n,e,t,r,s,o,a)}function Di(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>li(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ls(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>vn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>vn(r)).join(",")),e.Te=t}return e.Te}function ki(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ua(n.startAt,e.startAt)&&Ua(n.endAt,e.endAt)}function ui(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function op(n,e,t,r,s,o,a,l){return new bn(n,e,t,r,s,o,a,l)}function Oi(n){return new bn(n)}function $a(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Al(n){return n.collectionGroup!==null}function Qn(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ae(Pe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new ir(o,r))}),t.has(Pe.keyField().canonicalString())||e.Ie.push(new ir(Pe.keyField(),r))}return e.Ie}function lt(n){const e=G(n);return e.Ee||(e.Ee=ap(e,Qn(n))),e.Ee}function ap(n,e){if(n.limitType==="F")return Ba(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ir(s.field,o)});const t=n.endAt?new Jr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jr(n.startAt.position,n.startAt.inclusive):null;return Ba(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hi(n,e){const t=n.filters.concat([e]);return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function di(n,e,t){return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function hs(n,e){return ki(lt(n),lt(e))&&n.limitType===e.limitType}function bl(n){return`${Di(lt(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Tl(s)).join(", ")}]`),ls(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>vn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>vn(s)).join(",")),`Target(${r})`}(lt(n))}; limitType=${n.limitType})`}function ds(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Qn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,h){const d=Fa(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,Qn(r),s)||r.endAt&&!function(a,l,h){const d=Fa(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,Qn(r),s))}(n,e)}function cp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xl(n){return(e,t)=>{let r=!1;for(const s of Qn(n)){const o=lp(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function lp(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?yn(h,d):B(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return ll(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new fe(U.comparator);function Et(){return up}const Rl=new fe(U.comparator);function zn(...n){let e=Rl;for(const t of n)e=e.insert(t.key,t);return e}function Sl(n){let e=Rl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zt(){return Yn()}function Cl(){return Yn()}function Yn(){return new Xt(n=>n.toString(),(n,e)=>n.isEqual(e))}const hp=new fe(U.comparator),dp=new Ae(U.comparator);function Z(...n){let e=dp;for(const t of n)e=e.add(t);return e}const fp=new Ae(J);function pp(){return fp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(e)?"-0":e}}function Pl(n){return{integerValue:""+n}}function mp(n,e){return $f(e)?Pl(e):ji(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this._=void 0}}function gp(n,e,t){return n instanceof or?function(s,o){const a={fields:{[dl]:{stringValue:hl},[pl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Vi(o)&&(o=us(o)),o&&(a.fields[fl]=o),{mapValue:a}}(t,e):n instanceof ar?Nl(n,e):n instanceof cr?Dl(n,e):function(s,o){const a=Vl(s,o),l=qa(a)+qa(s.Ae);return ci(a)&&ci(s.Ae)?Pl(l):ji(s.serializer,l)}(n,e)}function _p(n,e,t){return n instanceof ar?Nl(n,e):n instanceof cr?Dl(n,e):t}function Vl(n,e){return n instanceof Zr?function(r){return ci(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class or extends fs{}class ar extends fs{constructor(e){super(),this.elements=e}}function Nl(n,e){const t=kl(e);for(const r of n.elements)t.some(s=>ft(s,r))||t.push(r);return{arrayValue:{values:t}}}class cr extends fs{constructor(e){super(),this.elements=e}}function Dl(n,e){let t=kl(e);for(const r of n.elements)t=t.filter(s=>!ft(s,r));return{arrayValue:{values:t}}}class Zr extends fs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function qa(n){return _e(n.integerValue||n.doubleValue)}function kl(n){return Ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.field=e,this.transform=t}}function vp(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ar&&s instanceof ar||r instanceof cr&&s instanceof cr?_n(r.elements,s.elements,ft):r instanceof Zr&&s instanceof Zr?ft(r.Ae,s.Ae):r instanceof or&&s instanceof or}(n.transform,e.transform)}class Ep{constructor(e,t){this.version=e,this.transformResults=t}}class it{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ps{}function Ol(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mi(n.key,it.none()):new hr(n.key,n.data,it.none());{const t=n.data,r=Ye.empty();let s=new Ae(Pe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Mt(n.key,r,new Ze(s.toArray()),it.none())}}function wp(n,e,t){n instanceof hr?function(s,o,a){const l=s.value.clone(),h=Ga(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Mt?function(s,o,a){if(!qr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ga(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(jl(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Xn(n,e,t,r){return n instanceof hr?function(o,a,l,h){if(!qr(o.precondition,a))return l;const d=o.value.clone(),p=Ha(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Mt?function(o,a,l,h){if(!qr(o.precondition,a))return l;const d=Ha(o.fieldTransforms,h,a),p=a.data;return p.setAll(jl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,a,l){return qr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Tp(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Vl(r.transform,s||null);o!=null&&(t===null&&(t=Ye.empty()),t.set(r.field,o))}return t||null}function za(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_n(r,s,(o,a)=>vp(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hr extends ps{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mt extends ps{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function jl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ga(n,e,t){const r=new Map;se(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,_p(a,l,t[s]))}return r}function Ha(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,gp(o,a,e))}return r}class Mi extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ip extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&wp(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Xn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Xn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Cl();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const h=Ol(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&_n(this.mutations,e.mutations,(t,r)=>za(t,r))&&_n(this.baseMutations,e.baseMutations,(t,r)=>za(t,r))}}class Li{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return hp}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Li(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,ee;function Rp(n){switch(n){case C.OK:return B(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Ml(n){if(n===void 0)return yt("GRPC error has no .code"),C.UNKNOWN;switch(n){case ve.OK:return C.OK;case ve.CANCELLED:return C.CANCELLED;case ve.UNKNOWN:return C.UNKNOWN;case ve.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ve.INTERNAL:return C.INTERNAL;case ve.UNAVAILABLE:return C.UNAVAILABLE;case ve.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ve.NOT_FOUND:return C.NOT_FOUND;case ve.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ve.ABORTED:return C.ABORTED;case ve.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ve.DATA_LOSS:return C.DATA_LOSS;default:return B(39323,{code:n})}}(ee=ve||(ve={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new St([4294967295,4294967295],0);function Wa(n){const e=Sp().encode(n),t=new Jc;return t.update(e),new Uint8Array(t.digest())}function Ka(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new St([t,r],0),new St([s,o],0)]}class Fi{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gn(`Invalid padding: ${t}`);if(r<0)throw new Gn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=St.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(St.fromNumber(r)));return s.compare(Cp)===1&&(s=new St([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wa(e),[r,s]=Ka(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Fi(o,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Wa(e),[r,s]=Ka(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,dr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ms(z.min(),s,new fe(J),Et(),Z())}}class dr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new dr(r,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Ll{constructor(e,t){this.targetId=e,this.Ce=t}}class Fl{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Qa{constructor(){this.ve=0,this.Fe=Ya(),this.Me=Ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),r=Z();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:o})}}),new dr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ya()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Pp{constructor(e){this.Ge=e,this.ze=new Map,this.je=Et(),this.Je=Mr(),this.He=Mr(),this.Ye=new fe(J)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:B(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(ui(o))if(r===0){const a=new U(o.path);this.et(t,a,Fe.newNoDocument(a,z.min()))}else se(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),h=l?this.ct(l,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=Nt(r).toUint8Array()}catch(h){if(h instanceof ul)return gn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Fi(a,s,o)}catch(h){return gn(h instanceof Gn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&ui(l.target)){const h=new U(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Fe.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let r=Z();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const s=new ms(e,t,this.Ye,this.je,r);return this.je=Et(),this.Je=Mr(),this.He=Mr(),this.Ye=new fe(J),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Qa,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ae(J),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ae(J),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qa),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Mr(){return new fe(U.comparator)}function Ya(){return new fe(U.comparator)}const Vp={asc:"ASCENDING",desc:"DESCENDING"},Np={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dp={and:"AND",or:"OR"};class kp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fi(n,e){return n.useProto3Json||ls(e)?e:{value:e}}function es(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ul(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Op(n,e){return es(n,e.toTimestamp())}function ut(n){return se(!!n,49232),z.fromTimestamp(function(t){const r=Vt(t);return new he(r.seconds,r.nanos)}(n))}function Ui(n,e){return pi(n,e).canonicalString()}function pi(n,e){const t=function(s){return new ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Bl(n){const e=ce.fromString(n);return se(Hl(e),10190,{key:e.toString()}),e}function mi(n,e){return Ui(n.databaseId,e.path)}function Gs(n,e){const t=Bl(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(ql(t))}function $l(n,e){return Ui(n.databaseId,e)}function jp(n){const e=Bl(n);return e.length===4?ce.emptyPath():ql(e)}function gi(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ql(n){return se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xa(n,e,t){return{name:mi(n,e),fields:t.value.mapValue.fields}}function Mp(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(se(p===void 0||typeof p=="string",58123),Ve.fromBase64String(p||"")):(se(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ve.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?C.UNKNOWN:Ml(d.code);return new O(p,d.message||"")}(a);t=new Fl(r,s,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gs(n,r.document.name),o=ut(r.document.updateTime),a=r.document.createTime?ut(r.document.createTime):z.min(),l=new Ye({mapValue:{fields:r.document.fields}}),h=Fe.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new zr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gs(n,r.document),o=r.readTime?ut(r.readTime):z.min(),a=Fe.newNoDocument(s,o),l=r.removedTargetIds||[];t=new zr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gs(n,r.document),o=r.removedTargetIds||[];t=new zr([],o,s,null)}else{if(!("filter"in e))return B(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new xp(s,o),l=r.targetId;t=new Ll(l,a)}}return t}function Lp(n,e){let t;if(e instanceof hr)t={update:Xa(n,e.key,e.value)};else if(e instanceof Mi)t={delete:mi(n,e.key)};else if(e instanceof Mt)t={update:Xa(n,e.key,e.data),updateMask:Wp(e.fieldMask)};else{if(!(e instanceof Ip))return B(16599,{Vt:e.type});t={verify:mi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof or)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ar)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw B(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Op(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:B(27497)}(n,e.precondition)),t}function Fp(n,e){return n&&n.length>0?(se(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?ut(s.updateTime):ut(o);return a.isEqual(z.min())&&(a=ut(o)),new Ep(a,s.transformResults||[])}(t,e))):[]}function Up(n,e){return{documents:[$l(n,e.path)]}}function Bp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$l(n,s);const o=function(d){if(d.length!==0)return Gl(ot.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:hn(E.field),direction:zp(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=fi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function $p(n){let e=jp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){se(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(v){const E=zl(v);return E instanceof ot&&El(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(E=>function(S){return new ir(dn(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(v){let E;return E=typeof v=="object"?v.value:v,ls(E)?null:E}(t.limit));let h=null;t.startAt&&(h=function(v){const E=!!v.before,x=v.values||[];return new Jr(x,E)}(t.startAt));let d=null;return t.endAt&&(d=function(v){const E=!v.before,x=v.values||[];return new Jr(x,E)}(t.endAt)),op(e,s,a,o,l,"F",h,d)}function qp(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=dn(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=dn(t.unaryFilter.field);return Ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=dn(t.unaryFilter.field);return Ee.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dn(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(dn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>zl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(t.compositeFilter.op))}(n):B(30097,{filter:n})}function zp(n){return Vp[n]}function Gp(n){return Np[n]}function Hp(n){return Dp[n]}function hn(n){return{fieldPath:n.canonicalString()}}function dn(n){return Pe.fromServerFormat(n.fieldPath)}function Gl(n){return n instanceof Ee?function(t){if(t.op==="=="){if(La(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NAN"}};if(Ma(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(La(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NAN"}};if(Ma(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hn(t.field),op:Gp(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(s=>Gl(s));return r.length===1?r[0]:{compositeFilter:{op:Hp(t.op),filters:r}}}(n):B(54877,{filter:n})}function Wp(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,r,s,o=z.min(),a=z.min(),l=Ve.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.yt=e}}function Qp(n){const e=$p({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?di(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.Cn=new Xp}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Pt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Xp{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ae(ce.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ae(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wl=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(Wl,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new En(0)}static cr(){return new En(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="LruGarbageCollector",Jp=1048576;function ec([n,e],[t,r]){const s=J(n,t);return s===0?J(e,r):s}class Zp{constructor(e){this.Ir=e,this.buffer=new Ae(ec),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ec(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class em{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){j(Za,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){An(t)?j(Za,"Ignoring IndexedDB error during garbage collection: ",t):await In(t)}await this.Vr(3e5)})}}class tm{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(cs.ce);const r=new Zp(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ja)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ja):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(e,s))).next(v=>(r=v,l=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(d=Date.now(),ln()<=te.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function nm(n,e){return new tm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.changes=new Xt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Xn(r.mutation,s,Ze.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const s=zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=zn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let o=Et();const a=Yn(),l=function(){return Yn()}();return t.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Mt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Xn(p.mutation,d,p.mutation.getFieldMask(),he.now())):a.set(d.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new sm(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Yn();let s=new fe((a,l)=>a-l),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||Ze.empty();p=l.applyToLocalView(d,p),r.set(h,p);const v=(s.get(l.batchId)||Z()).add(h);s=s.insert(l.batchId,v)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,v=Cl();p.forEach(E=>{if(!o.has(E)){const x=Ol(t.get(E),r.get(E));x!==null&&v.set(E,x),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Al(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):P.resolve(zt());let l=tr,h=o;return a.next(d=>P.forEach(d,(p,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{h=h.insert(p,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,Z())).next(p=>({batchId:l,changes:Sl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=zn();return this.indexManager.getCollectionParents(e,o).next(l=>P.forEach(l,h=>{const d=function(v,E){return new bn(E,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((v,E)=>{a=a.insert(v,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Fe.newInvalidDocument(p)))});let l=zn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Xn(p.mutation,d,Ze.empty(),he.now()),ds(t,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ut(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:Qp(s.bundledQuery),readTime:ut(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.overlays=new fe(U.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zt();return P.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.St(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=zt(),o=t.length+1,a=new U(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new fe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=zt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=zt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return P.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new bp(t,r));let o=this.qr.get(t);o===void 0&&(o=Z(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Qr=new Ae(xe.$r),this.Ur=new Ae(xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new xe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new xe(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new U(new ce([])),r=new xe(t,e),s=new xe(t,e+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new U(new ce([])),r=new xe(t,e),s=new xe(t,e+1);let o=Z();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new xe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return U.comparator(e.key,t.key)||J(e.Yr,t.Yr)}static Kr(e,t){return J(e.Yr,t.Yr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ae(xe.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ap(o,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new xe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Pi:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new xe(t,0),s=new xe(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(J);return t.forEach(s=>{const o=new xe(s,0),a=new xe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],l=>{r=r.add(l.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new xe(new U(o),0);let l=new Ae(J);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Yr)),!0)},a),P.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){se(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(t.mutations,s=>{const o=new xe(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new xe(t,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.ri=e,this.docs=function(){return new fe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Fe.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=Et();const a=t.path,l=new U(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Lf(Mf(p),r)<=0||(s.has(p.key)||ds(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ii(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new hm(this)}getSize(e){return P.resolve(this.size)}}class hm extends rm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.persistence=e,this.si=new Xt(t=>Di(t),ki),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Bi,this.targetCount=0,this.ai=En.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new En(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t){this.ui={},this.overlays={},this.ci=new cs(0),this.li=!1,this.li=!0,this.hi=new cm,this.referenceDelegate=e(this),this.Pi=new dm(this),this.indexManager=new Yp,this.remoteDocumentCache=function(s){return new um(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Kp(t),this.Ii=new om(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new am,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new lm(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new fm(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(e,t){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class fm extends Uf{constructor(e){super(),this.currentSequenceNumber=e}}class $i{constructor(e){this.persistence=e,this.Ri=new Bi,this.Vi=null}static mi(e){return new $i(e)}get fi(){if(this.Vi)return this.Vi;throw B(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=U.fromPath(r);return this.gi(e,s).next(o=>{o||t.removeEntry(s,z.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ts{constructor(e,t){this.persistence=e,this.pi=new Xt(r=>qf(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=nm(this,t)}static mi(e,t){return new ts(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return P.forEach(this.pi,(r,s)=>this.br(e,r,s).next(o=>o?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,o.removeEntry(a,z.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Br(e.data.value)),t}br(e,t,r){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Z(),s=Z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new qi(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return ud()?8:Bf(cd())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new pm;return this.Ss(e,t,a).next(l=>{if(o.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>o.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(ln()<=te.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(ln()<=te.DEBUG&&j("QueryEngine","Query:",un(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ln()<=te.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lt(t))):P.resolve())}ys(e,t){if($a(t))return P.resolve(null);let r=lt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=di(t,null,"F"),r=lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=Z(...o);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Ds(t,l);return this.Cs(t,d,a,h.readTime)?this.ys(e,di(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,r,s){return $a(t)||s.isEqual(z.min())?P.resolve(null):this.ps.getDocuments(e,r).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,s)?P.resolve(null):(ln()<=te.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(t)),this.vs(e,a,t,jf(s,tr)).next(l=>l))})}Ds(e,t){let r=new Ae(xl(e));return t.forEach((s,o)=>{ds(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return ln()<=te.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",un(t)),this.ps.getDocumentsMatchingQuery(e,t,Pt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="LocalStore",gm=3e8;class _m{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new fe(J),this.xs=new Xt(o=>Di(o),ki),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new im(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function ym(n,e,t,r){return new _m(n,e,t,r)}async function Ql(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=Z();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function vm(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const v=d.batch,E=v.keys();let x=P.resolve();return E.forEach(S=>{x=x.next(()=>p.getEntry(h,S)).next(N=>{const V=d.docVersions.get(S);se(V!==null,48541),N.version.compareTo(V)<0&&(v.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(h,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=Z();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Yl(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Em(n,e){const t=G(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((p,v)=>{const E=s.get(v);if(!E)return;l.push(t.Pi.removeMatchingKeys(o,p.removedDocuments,v).next(()=>t.Pi.addMatchingKeys(o,p.addedDocuments,v)));let x=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?x=x.withResumeToken(Ve.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,r)),s=s.insert(v,x),function(N,V,F){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=gm?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(E,x,p)&&l.push(t.Pi.updateTargetData(o,x))});let h=Et(),d=Z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(wm(o,a,e.documentUpdates).next(p=>{h=p.ks,d=p.qs})),!r.isEqual(z.min())){const p=t.Pi.getLastRemoteSnapshotVersion(o).next(v=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.Ms=s,o))}function wm(n,e,t){let r=Z(),s=Z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Et();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(z.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):j(zi,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:s}})}function Tm(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pi),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Im(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(o=>o?(s=o,P.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new At(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function _i(n,e,t){const r=G(n),s=r.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!An(a))throw a;j(zi,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function tc(n,e,t){const r=G(n);let s=z.min(),o=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const v=G(h),E=v.xs.get(p);return E!==void 0?P.resolve(v.Ms.get(E)):v.Pi.getTargetData(d,p)}(r,a,lt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?o:Z())).next(l=>(Am(r,cp(e),l),{documents:l,Qs:o})))}function Am(n,e,t){let r=n.Os.get(e)||z.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(e,r)}class nc{constructor(){this.activeTargetIds=pp()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bm{constructor(){this.Mo=new nc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new nc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="ConnectivityMonitor";class sc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){j(rc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){j(rc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr=null;function yi(){return Lr===null?Lr=function(){return 268435456+Math.round(2147483648*Math.random())}():Lr++,"0x"+Lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="RestConnection",Rm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Sm{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Yr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,o){const a=yi(),l=this.zo(e,t.toUriEncodedString());j(Hs,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(l),p=lr(d);return this.Jo(e,l,h,r,p).then(v=>(j(Hs,`Received RPC '${e}' ${a}: `,v),v),v=>{throw gn(Hs,`RPC '${e}' ${a} failed with error: `,v,"url: ",l,"request:",r),v})}Ho(e,t,r,s,o,a){return this.Go(e,t,r,s,o)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}zo(e,t){const r=Rm[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class Pm extends Sm{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=yi();return new Promise((l,h)=>{const d=new Zc;d.setWithCredentials(!0),d.listenOnce(el.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ur.NO_ERROR:const v=d.getResponseJson();j(Me,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),l(v);break;case Ur.TIMEOUT:j(Me,`RPC '${e}' ${a} timed out`),h(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const E=d.getStatus();if(j(Me,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let x=d.getResponseJson();Array.isArray(x)&&(x=x[0]);const S=x==null?void 0:x.error;if(S&&S.status&&S.message){const N=function(F){const L=F.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN}(S.status);h(new O(N,S.message))}else h(new O(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(C.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{j(Me,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);j(Me,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}T_(e,t,r){const s=yi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=rl(),l=nl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");j(Me,`Creating RPC '${e}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);this.I_(v);let E=!1,x=!1;const S=new Cm({Yo:V=>{x?j(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(E||(j(Me,`Opening RPC '${e}' stream ${s} transport.`),v.open(),E=!0),j(Me,`RPC '${e}' stream ${s} sending:`,V),v.send(V))},Zo:()=>v.close()}),N=(V,F,L)=>{V.listen(F,M=>{try{L(M)}catch(H){setTimeout(()=>{throw H},0)}})};return N(v,qn.EventType.OPEN,()=>{x||(j(Me,`RPC '${e}' stream ${s} transport opened.`),S.o_())}),N(v,qn.EventType.CLOSE,()=>{x||(x=!0,j(Me,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(v))}),N(v,qn.EventType.ERROR,V=>{x||(x=!0,gn(Me,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),S.a_(new O(C.UNAVAILABLE,"The operation could not be completed")))}),N(v,qn.EventType.MESSAGE,V=>{var F;if(!x){const L=V.data[0];se(!!L,16349);const M=L,H=(M==null?void 0:M.error)||((F=M[0])==null?void 0:F.error);if(H){j(Me,`RPC '${e}' stream ${s} received error:`,H);const ae=H.status;let K=function(y){const T=ve[y];if(T!==void 0)return Ml(T)}(ae),w=H.message;K===void 0&&(K=C.INTERNAL,w="Unknown error status: "+ae+" with message "+H.message),x=!0,S.a_(new O(K,w)),v.close()}else j(Me,`RPC '${e}' stream ${s} received:`,L),S.u_(L)}}),N(l,tl.STAT_EVENT,V=>{V.stat===ii.PROXY?j(Me,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===ii.NOPROXY&&j(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ws(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){return new kp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="PersistentStream";class Jl{constructor(e,t,r,s,o,a,l,h){this.Mi=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return j(ic,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(j(ic,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vm extends Jl{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Mp(this.serializer,e),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?ut(a.readTime):z.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=gi(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=ui(h)?{documents:Up(o,h)}:{query:Bp(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ul(o,a.resumeToken);const d=fi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=es(o,a.snapshotVersion.toTimestamp());const d=fi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=qp(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=gi(this.serializer),t.removeTarget=e,this.q_(t)}}class Nm extends Jl{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Fp(e.writeResults,e.commitTime),r=ut(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=gi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Lp(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{}class km extends Dm{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,pi(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())})}Ho(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,pi(t,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Om{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(yt(t),this.aa=!1):j("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="RemoteStore";class jm{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Jt(this)&&(j(Kt,"Restarting streams for network reachability change."),await async function(h){const d=G(h);d.Ea.add(4),await fr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await _s(d)}(this))})}),this.Ra=new Om(r,s)}}async function _s(n){if(Jt(n))for(const e of n.da)await e(!0)}async function fr(n){for(const e of n.da)await e(!1)}function Zl(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ki(t)?Wi(t):xn(t).O_()&&Hi(t,e))}function Gi(n,e){const t=G(n),r=xn(t);t.Ia.delete(e),r.O_()&&eu(t,e),t.Ia.size===0&&(r.O_()?r.L_():Jt(t)&&t.Ra.set("Unknown"))}function Hi(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xn(n).Y_(e)}function eu(n,e){n.Va.Ue(e),xn(n).Z_(e)}function Wi(n){n.Va=new Pp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),xn(n).start(),n.Ra.ua()}function Ki(n){return Jt(n)&&!xn(n).x_()&&n.Ia.size>0}function Jt(n){return G(n).Ea.size===0}function tu(n){n.Va=void 0}async function Mm(n){n.Ra.set("Online")}async function Lm(n){n.Ia.forEach((e,t)=>{Hi(n,e)})}async function Fm(n,e){tu(n),Ki(n)?(n.Ra.ha(e),Wi(n)):n.Ra.set("Unknown")}async function Um(n,e,t){if(n.Ra.set("Online"),e instanceof Fl&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){j(Kt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ns(n,r)}else if(e instanceof zr?n.Va.Ze(e):e instanceof Ll?n.Va.st(e):n.Va.tt(e),!t.isEqual(z.min()))try{const r=await Yl(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(Ve.EMPTY_BYTE_STRING,p.snapshotVersion)),eu(o,h);const v=new At(p.target,h,d,p.sequenceNumber);Hi(o,v)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){j(Kt,"Failed to raise snapshot:",r),await ns(n,r)}}async function ns(n,e,t){if(!An(e))throw e;n.Ea.add(1),await fr(n),n.Ra.set("Offline"),t||(t=()=>Yl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(Kt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await _s(n)})}function nu(n,e){return e().catch(t=>ns(n,t,e))}async function ys(n){const e=G(n),t=kt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Pi;for(;Bm(e);)try{const s=await Tm(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,$m(e,s)}catch(s){await ns(e,s)}ru(e)&&su(e)}function Bm(n){return Jt(n)&&n.Ta.length<10}function $m(n,e){n.Ta.push(e);const t=kt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ru(n){return Jt(n)&&!kt(n).x_()&&n.Ta.length>0}function su(n){kt(n).start()}async function qm(n){kt(n).ra()}async function zm(n){const e=kt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Gm(n,e,t){const r=n.Ta.shift(),s=Li.from(r,e,t);await nu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ys(n)}async function Hm(n,e){e&&kt(n).X_&&await async function(r,s){if(function(a){return Rp(a)&&a!==C.ABORTED}(s.code)){const o=r.Ta.shift();kt(r).B_(),await nu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ys(r)}}(n,e),ru(n)&&su(n)}async function oc(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),j(Kt,"RemoteStore received new credentials");const r=Jt(t);t.Ea.add(3),await fr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await _s(t)}async function Wm(n,e){const t=G(n);e?(t.Ea.delete(2),await _s(t)):e||(t.Ea.add(2),await fr(t),t.Ra.set("Unknown"))}function xn(n){return n.ma||(n.ma=function(t,r,s){const o=G(t);return o.sa(),new Vm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Mm.bind(null,n),t_:Lm.bind(null,n),r_:Fm.bind(null,n),H_:Um.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Ki(n)?Wi(n):n.Ra.set("Unknown")):(await n.ma.stop(),tu(n))})),n.ma}function kt(n){return n.fa||(n.fa=function(t,r,s){const o=G(t);return o.sa(),new Nm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:qm.bind(null,n),r_:Hm.bind(null,n),ta:zm.bind(null,n),na:Gm.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await ys(n)):(await n.fa.stop(),n.Ta.length>0&&(j(Kt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,l=new Qi(e,t,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yi(n,e){if(yt("AsyncQueue",`${e}: ${n}`),An(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{static emptySet(e){return new fn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=zn(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.ga=new fe(U.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):B(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class wn{constructor(e,t,r,s,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new wn(e,t,fn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Qm{constructor(){this.queries=cc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=G(t),o=s.queries;s.queries=cc(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function cc(){return new Xt(n=>bl(n),hs)}async function iu(n,e){const t=G(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(r=2):(o=new Km,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Yi(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Xi(t)}async function ou(n,e){const t=G(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ym(n,e){const t=G(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Xi(t)}function Xm(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);r.queries.delete(e)}function Xi(n){n.Ca.forEach(e=>{e.next()})}var vi,lc;(lc=vi||(vi={})).Ma="default",lc.Cache="cache";class au{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==vi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.key=e}}class lu{constructor(e){this.key=e}}class Jm{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Z(),this.mutatedKeys=Z(),this.eu=xl(e),this.tu=new fn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ac,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,v)=>{const E=s.get(p),x=ds(this.query,v)?v:null,S=!!E&&this.mutatedKeys.has(E.key),N=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let V=!1;E&&x?E.data.isEqual(x.data)?S!==N&&(r.track({type:3,doc:x}),V=!0):this.su(E,x)||(r.track({type:2,doc:x}),V=!0,(h&&this.eu(x,h)>0||d&&this.eu(x,d)<0)&&(l=!0)):!E&&x?(r.track({type:0,doc:x}),V=!0):E&&!x&&(r.track({type:1,doc:E}),V=!0,(h||d)&&(l=!0)),V&&(x?(a=a.add(x),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,v)=>function(x,S){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Rt:V})}};return N(x)-N(S)}(p.type,v.type)||this.eu(p.doc,v.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new wn(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ac,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new lu(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new cu(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return wn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ji="SyncEngine";class Zm{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class eg{constructor(e){this.key=e,this.hu=!1}}class tg{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Xt(l=>bl(l),hs),this.Iu=new Map,this.Eu=new Set,this.du=new fe(U.comparator),this.Au=new Map,this.Ru=new Bi,this.Vu={},this.mu=new Map,this.fu=En.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ng(n,e,t=!0){const r=mu(n);let s;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await uu(r,e,t,!0),s}async function rg(n,e){const t=mu(n);await uu(t,e,!0,!1)}async function uu(n,e,t,r){const s=await Im(n.localStore,lt(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await sg(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Zl(n.remoteStore,s),l}async function sg(n,e,t,r,s){n.pu=(v,E,x)=>async function(N,V,F,L){let M=V.view.ru(F);M.Cs&&(M=await tc(N.localStore,V.query,!1).then(({documents:w})=>V.view.ru(w,M)));const H=L&&L.targetChanges.get(V.targetId),ae=L&&L.targetMismatches.get(V.targetId)!=null,K=V.view.applyChanges(M,N.isPrimaryClient,H,ae);return hc(N,V.targetId,K.au),K.snapshot}(n,v,E,x);const o=await tc(n.localStore,e,!0),a=new Jm(e,o.Qs),l=a.ru(o.documents),h=dr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);hc(n,t,d.au);const p=new Zm(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function ig(n,e,t){const r=G(n),s=r.Tu.get(e),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!hs(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _i(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Gi(r.remoteStore,s.targetId),Ei(r,s.targetId)}).catch(In)):(Ei(r,s.targetId),await _i(r.localStore,s.targetId,!0))}async function og(n,e){const t=G(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Gi(t.remoteStore,r.targetId))}async function ag(n,e,t){const r=pg(n);try{const s=await function(a,l){const h=G(a),d=he.now(),p=l.reduce((x,S)=>x.add(S.key),Z());let v,E;return h.persistence.runTransaction("Locally write mutations","readwrite",x=>{let S=Et(),N=Z();return h.Ns.getEntries(x,p).next(V=>{S=V,S.forEach((F,L)=>{L.isValidDocument()||(N=N.add(F))})}).next(()=>h.localDocuments.getOverlayedDocuments(x,S)).next(V=>{v=V;const F=[];for(const L of l){const M=Tp(L,v.get(L.key).overlayedDocument);M!=null&&F.push(new Mt(L.key,M,_l(M.value.mapValue),it.exists(!0)))}return h.mutationQueue.addMutationBatch(x,d,F,l)}).next(V=>{E=V;const F=V.applyToLocalDocumentSet(v,N);return h.documentOverlayCache.saveOverlays(x,V.batchId,F)})}).then(()=>({batchId:E.batchId,changes:Sl(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new fe(J)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await pr(r,s.changes),await ys(r.remoteStore)}catch(s){const o=Yi(s,"Failed to persist write");t.reject(o)}}async function hu(n,e){const t=G(n);try{const r=await Em(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Au.get(o);a&&(se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?se(a.hu,14607):s.removedDocuments.size>0&&(se(a.hu,42227),a.hu=!1))}),await pr(t,r,e)}catch(r){await In(r)}}function uc(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((o,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=G(a);h.onlineState=l;let d=!1;h.queries.forEach((p,v)=>{for(const E of v.Sa)E.va(l)&&(d=!0)}),d&&Xi(h)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cg(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),o=s&&s.key;if(o){let a=new fe(U.comparator);a=a.insert(o,Fe.newNoDocument(o,z.min()));const l=Z().add(o),h=new ms(z.min(),new Map,new fe(J),a,l);await hu(r,h),r.du=r.du.remove(o),r.Au.delete(e),Zi(r)}else await _i(r.localStore,e,!1).then(()=>Ei(r,e,t)).catch(In)}async function lg(n,e){const t=G(n),r=e.batch.batchId;try{const s=await vm(t.localStore,e);fu(t,r,null),du(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pr(t,s)}catch(s){await In(s)}}async function ug(n,e,t){const r=G(n);try{const s=await function(a,l){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(v=>(se(v!==null,37113),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);fu(r,e,t),du(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pr(r,s)}catch(s){await In(s)}}function du(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function fu(n,e,t){const r=G(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ei(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||pu(n,r)})}function pu(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Gi(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Zi(n))}function hc(n,e,t){for(const r of t)r instanceof cu?(n.Ru.addReference(r.key,e),hg(n,r)):r instanceof lu?(j(Ji,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||pu(n,r.key)):B(19791,{wu:r})}function hg(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(j(Ji,"New document in limbo: "+t),n.Eu.add(r),Zi(n))}function Zi(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(ce.fromString(e)),r=n.fu.next();n.Au.set(r,new eg(t)),n.du=n.du.insert(t,r),Zl(n.remoteStore,new At(lt(Oi(t.path)),r,"TargetPurposeLimboResolution",cs.ce))}}async function pr(n,e,t){const r=G(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,h)=>{a.push(r.pu(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=qi.As(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(h,d){const p=G(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>P.forEach(d,E=>P.forEach(E.Es,x=>p.persistence.referenceDelegate.addReference(v,E.targetId,x)).next(()=>P.forEach(E.ds,x=>p.persistence.referenceDelegate.removeReference(v,E.targetId,x)))))}catch(v){if(!An(v))throw v;j(zi,"Failed to update sequence numbers: "+v)}for(const v of d){const E=v.targetId;if(!v.fromCache){const x=p.Ms.get(E),S=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(S);p.Ms=p.Ms.insert(E,N)}}}(r.localStore,o))}async function dg(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){j(Ji,"User change. New user:",e.toKey());const r=await Ql(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(l=>{l.forEach(h=>{h.reject(new O(C.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pr(t,r.Ls)}}function fg(n,e){const t=G(n),r=t.Au.get(e);if(r&&r.hu)return Z().add(r.key);{let s=Z();const o=t.Iu.get(e);if(!o)return s;for(const a of o){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function mu(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cg.bind(null,e),e.Pu.H_=Ym.bind(null,e.eventManager),e.Pu.yu=Xm.bind(null,e.eventManager),e}function pg(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ug.bind(null,e),e}class rs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ym(this.persistence,new mm,e.initialUser,this.serializer)}Cu(e){return new Kl($i.mi,this.serializer)}Du(e){return new bm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rs.provider={build:()=>new rs};class mg extends rs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){se(this.persistence.referenceDelegate instanceof ts,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new em(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new Kl(r=>ts.mi(r,t),this.serializer)}}class wi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dg.bind(null,this.syncEngine),await Wm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qm}()}createDatastore(e){const t=gs(e.databaseInfo.databaseId),r=function(o){return new Pm(o)}(e.databaseInfo);return function(o,a,l,h){return new km(o,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,l){return new jm(r,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>uc(this.syncEngine,t,0),function(){return sc.v()?new sc:new xm}())}createSyncEngine(e,t){return function(s,o,a,l,h,d,p){const v=new tg(s,o,a,l,h,d);return p&&(v.gu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=G(s);j(Kt,"RemoteStore shutting down."),o.Ea.add(5),await fr(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}wi.provider={build:()=>new wi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="FirestoreClient";class gg{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=Ci.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{j(Ot,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j(Ot,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yi(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ks(n,e){n.asyncQueue.verifyOperationInProgress(),j(Ot,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ql(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function dc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _g(n);j(Ot,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>oc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>oc(e.remoteStore,s)),n._onlineComponents=e}async function _g(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Ot,"Using user provided OfflineComponentProvider");try{await Ks(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;gn("Error using user provided cache. Falling back to memory cache: "+t),await Ks(n,new rs)}}else j(Ot,"Using default OfflineComponentProvider"),await Ks(n,new mg(void 0));return n._offlineComponents}async function _u(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Ot,"Using user provided OnlineComponentProvider"),await dc(n,n._uninitializedComponentsProvider._online)):(j(Ot,"Using default OnlineComponentProvider"),await dc(n,new wi))),n._onlineComponents}function yg(n){return _u(n).then(e=>e.syncEngine)}async function yu(n){const e=await _u(n),t=e.eventManager;return t.onListen=ng.bind(null,e.syncEngine),t.onUnlisten=ig.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=og.bind(null,e.syncEngine),t}function vg(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new gu({next:E=>{p.Nu(),a.enqueueAndForget(()=>ou(o,v));const x=E.docs.has(l);!x&&E.fromCache?d.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&E.fromCache&&h&&h.source==="server"?d.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),v=new au(Oi(l.path),p,{includeMetadataChanges:!0,qa:!0});return iu(o,v)}(await yu(n),n.asyncQueue,e,t,r)),r.promise}function Eg(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new gu({next:E=>{p.Nu(),a.enqueueAndForget(()=>ou(o,v)),E.fromCache&&h.source==="server"?d.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),v=new au(l,p,{includeMetadataChanges:!0,qa:!0});return iu(o,v)}(await yu(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="firestore.googleapis.com",pc=!0;class mc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Eu,this.ssl=pc}else this.host=e.host,this.ssl=e.ssl??pc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jp)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Of("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bf;switch(r.type){case"firstParty":return new Cf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fc.get(t);r&&(j("ComponentProvider","Removing Datastore"),fc.delete(t),r.terminate())}(this),Promise.resolve()}}function wg(n,e,t,r={}){var d;n=vt(n,vs);const s=lr(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Lc(`https://${l}`),Uc("Firestore",!0)),o.host!==Eu&&o.host!==l&&gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!Wr(h,a)&&(n._setSettings(h),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=Le.MOCK_USER;else{p=Fc(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Le(E)}n._authCredentials=new xf(new il(p,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zt(this.firestore,e,this._query)}}class Te{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}toJSON(){return{type:Te._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ur(t,Te._jsonSchema))return new Te(e,r||null,new U(ce.fromString(t.referencePath)))}}Te._jsonSchemaVersion="firestore/documentReference/1.0",Te._jsonSchema={type:we("string",Te._jsonSchemaVersion),referencePath:we("string")};class Ct extends Zt{constructor(e,t,r){super(e,t,Oi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new U(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function wu(n,e,...t){if(n=et(n),ol("collection","path",e),n instanceof vs){const r=ce.fromString(e,...t);return Sa(r),new Ct(n,null,r)}{if(!(n instanceof Te||n instanceof Ct))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return Sa(r),new Ct(n.firestore,null,r)}}function Es(n,e,...t){if(n=et(n),arguments.length===1&&(e=Ci.newId()),ol("doc","path",e),n instanceof vs){const r=ce.fromString(e,...t);return Ra(r),new Te(n,null,new U(r))}{if(!(n instanceof Te||n instanceof Ct))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return Ra(r),new Te(n.firestore,n instanceof Ct?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="AsyncQueue";class _c{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Xl(this,"async_queue_retry"),this._c=()=>{const r=Ws();r&&j(gc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ws();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ws();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!An(e))throw e;j(gc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,yt("INTERNAL UNHANDLED ERROR: ",yc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Qi.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&B(47125,{Pc:yc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Rn extends vs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new _c,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _c(e),this._firestoreClient=void 0,await e}}}function Tg(n,e){const t=typeof n=="object"?n:Qc(),r=typeof n=="string"?n:Yr,s=Gc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=jc("firestore");o&&wg(s,...o)}return s}function eo(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ig(n),n._firestoreClient}function Ig(n){var r,s,o;const e=n._freezeSettings(),t=function(l,h,d,p){return new Hf(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,vu(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new gg(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nt(Ve.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nt(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ur(e,nt._jsonSchema))return nt.fromBase64String(e.bytes)}}nt._jsonSchemaVersion="firestore/bytes/1.0",nt._jsonSchema={type:we("string",nt._jsonSchemaVersion),bytes:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ht._jsonSchemaVersion}}static fromJSON(e){if(ur(e,ht._jsonSchema))return new ht(e.latitude,e.longitude)}}ht._jsonSchemaVersion="firestore/geoPoint/1.0",ht._jsonSchema={type:we("string",ht._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ur(e,dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new dt(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dt._jsonSchemaVersion="firestore/vectorValue/1.0",dt._jsonSchema={type:we("string",dt._jsonSchemaVersion),vectorValues:we("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=/^__.*__$/;class bg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}class Tu{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Iu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ac:n})}}class to{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new to({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ss(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Iu(this.Ac)&&Ag.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class xg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||gs(e)}Cc(e,t,r,s=!1){return new to({Ac:e,methodName:t,Dc:r,path:Pe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function no(n){const e=n._freezeSettings(),t=gs(n._databaseId);return new xg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Rg(n,e,t,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,s);so("Data must be an object, but it was:",a,r);const l=Au(r,a);let h,d;if(o.merge)h=new Ze(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const E=Ti(e,v,t);if(!a.contains(E))throw new O(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);xu(p,E)||p.push(E)}h=new Ze(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new bg(new Ye(l),h,d)}class Is extends Ts{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Is}}class ro extends Ts{_toFieldTransform(e){return new yp(e.path,new or)}isEqual(e){return e instanceof ro}}function Sg(n,e,t,r){const s=n.Cc(1,e,t);so("Data must be an object, but it was:",s,r);const o=[],a=Ye.empty();jt(r,(h,d)=>{const p=io(e,h,t);d=et(d);const v=s.yc(p);if(d instanceof Is)o.push(p);else{const E=mr(d,v);E!=null&&(o.push(p),a.set(p,E))}});const l=new Ze(o);return new Tu(a,l,s.fieldTransforms)}function Cg(n,e,t,r,s,o){const a=n.Cc(1,e,t),l=[Ti(e,r,t)],h=[s];if(o.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)l.push(Ti(e,o[E])),h.push(o[E+1]);const d=[],p=Ye.empty();for(let E=l.length-1;E>=0;--E)if(!xu(d,l[E])){const x=l[E];let S=h[E];S=et(S);const N=a.yc(x);if(S instanceof Is)d.push(x);else{const V=mr(S,N);V!=null&&(d.push(x),p.set(x,V))}}const v=new Ze(d);return new Tu(p,v,a.fieldTransforms)}function Pg(n,e,t,r=!1){return mr(t,n.Cc(r?4:3,e))}function mr(n,e){if(bu(n=et(n)))return so("Unsupported field value:",e,n),Au(n,e);if(n instanceof Ts)return function(r,s){if(!Iu(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=mr(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=he.fromDate(r);return{timestampValue:es(s.serializer,o)}}if(r instanceof he){const o=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(s.serializer,o)}}if(r instanceof ht)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nt)return{bytesValue:Ul(s.serializer,r._byteString)};if(r instanceof Te){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ui(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dt)return function(a,l){return{mapValue:{fields:{[ml]:{stringValue:gl},[Xr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return ji(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${as(r)}`)}(n,e)}function Au(n,e){const t={};return ll(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(n,(r,s)=>{const o=mr(s,e.mc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function bu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof ht||n instanceof nt||n instanceof Te||n instanceof Ts||n instanceof dt)}function so(n,e,t){if(!bu(t)||!al(t)){const r=as(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Ti(n,e,t){if((e=et(e))instanceof ws)return e._internalPath;if(typeof e=="string")return io(n,e);throw ss("Field path arguments must be of type string or ",n,!1,void 0,t)}const Vg=new RegExp("[~\\*/\\[\\]]");function io(n,e,t){if(e.search(Vg)>=0)throw ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ws(...e.split("."))._internalPath}catch{throw ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ss(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new O(C.INVALID_ARGUMENT,l+n+h)}function xu(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ng(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ng extends Ru{data(){return super.data()}}function oo(n,e){return typeof e=="string"?io(n,e):e instanceof ws?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ao{}class Su extends ao{}function kg(n,e,...t){let r=[];e instanceof ao&&r.push(e),r=r.concat(t),function(o){const a=o.filter(h=>h instanceof lo).length,l=o.filter(h=>h instanceof co).length;if(a>1||a>0&&l>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class co extends Su{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new co(e,t,r)}_apply(e){const t=this._parse(e);return Cu(e._query,t),new Zt(e.firestore,e.converter,hi(e._query,t))}_parse(e){const t=no(e.firestore);return function(o,a,l,h,d,p,v){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ec(v,p);const S=[];for(const N of v)S.push(vc(h,o,N));E={arrayValue:{values:S}}}else E=vc(h,o,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ec(v,p),E=Pg(l,a,v,p==="in"||p==="not-in");return Ee.create(d,p,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class lo extends ao{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)Cu(a,h),a=hi(a,h)}(e._query,t),new Zt(e.firestore,e.converter,hi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uo extends Su{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uo(e,t)}_apply(e){const t=function(s,o,a){if(s.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ir(o,a)}(e._query,this._field,this._direction);return new Zt(e.firestore,e.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new bn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Og(n,e="asc"){const t=e,r=oo("orderBy",n);return uo._create(r,t)}function vc(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Al(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ce.fromString(t));if(!U.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ja(n,new U(r))}if(t instanceof Te)return ja(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${as(t)}.`)}function Ec(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cu(n,e){const t=function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jg{convertValue(e,t="none"){switch(Dt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var r,s,o;const t=(o=(s=(r=e.fields)==null?void 0:r[Xr].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>_e(a.doubleValue));return new dt(t)}convertGeoPoint(e){return new ht(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=us(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(nr(e));default:return null}}convertTimestamp(e){const t=Vt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ce.fromString(e);se(Hl(r),9688,{name:e});const s=new rr(r.get(1),r.get(3)),o=new U(r.popFirst(5));return s.isEqual(t)||yt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Hn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gt extends Ru{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(oo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Gt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gt._jsonSchema={type:we("string",Gt._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class Gr extends Gt{data(e={}){return super.data(e)}}class pn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Hn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gr(this._firestore,this._userDataWriter,r.key,r,new Hn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new Gr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Gr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Lg(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ci.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){n=vt(n,Te);const e=vt(n.firestore,Rn);return vg(eo(e),n._key).then(t=>zg(e,n,t))}pn._jsonSchemaVersion="firestore/querySnapshot/1.0",pn._jsonSchema={type:we("string",pn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};class Pu extends jg{constructor(e){super(),this.firestore=e}convertBytes(e){return new nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}function Ug(n){n=vt(n,Zt);const e=vt(n.firestore,Rn),t=eo(e),r=new Pu(e);return Dg(n._query),Eg(t,n._query).then(s=>new pn(e,r,n,s))}function Bg(n,e,t,...r){n=vt(n,Te);const s=vt(n.firestore,Rn),o=no(s);let a;return a=typeof(e=et(e))=="string"||e instanceof ws?Cg(o,"updateDoc",n._key,e,t,r):Sg(o,"updateDoc",n._key,e),ho(s,[a.toMutation(n._key,it.exists(!0))])}function $g(n){return ho(vt(n.firestore,Rn),[new Mi(n._key,it.none())])}function qg(n,e){const t=vt(n.firestore,Rn),r=Es(n),s=Mg(n.converter,e);return ho(t,[Rg(no(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,it.exists(!1))]).then(()=>r)}function ho(n,e){return function(r,s){const o=new gt;return r.asyncQueue.enqueueAndForget(async()=>ag(await yg(r),s,o)),o.promise}(eo(n),e)}function zg(n,e,t){const r=t.docs.get(e._key),s=new Pu(n);return new Gt(n,s,e._key,r,new Hn(t.hasPendingWrites,t.fromCache),e.converter)}function Ii(){return new ro("serverTimestamp")}(function(e,t=!0){(function(s){Tn=s})(Wc),Zn(new mn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Rn(new Rf(r.getProvider("auth-internal")),new Pf(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(d.options.projectId,p)}(a,s),a);return o={useFetchStreams:t,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Rt(Ia,Aa,e),Rt(Ia,Aa,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="firebasestorage.googleapis.com",Nu="storageBucket",Gg=2*60*1e3,Hg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Yt{constructor(e,t,r=0){super(Qs(e),`Firebase Storage: ${t} (${Qs(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function Qs(n){return"storage/"+n}function Du(){const n="An unknown error occurred, please check the error payload for server response.";return new De(Ne.UNKNOWN,n)}function Wg(n){return new De(Ne.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Kg(n){return new De(Ne.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Qg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Ne.UNAUTHENTICATED,n)}function Yg(){return new De(Ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Xg(n){return new De(Ne.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Jg(){return new De(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zg(){return new De(Ne.CANCELED,"User canceled the upload/download.")}function e_(n){return new De(Ne.INVALID_URL,"Invalid URL '"+n+"'.")}function t_(n){return new De(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function n_(){return new De(Ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nu+"' property when initializing the app?")}function Ai(n){return new De(Ne.INVALID_ARGUMENT,n)}function ku(){return new De(Ne.APP_DELETED,"The Firebase app was deleted.")}function r_(n){return new De(Ne.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $n(n){throw new De(Ne.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Xe.makeFromUrl(e,t)}catch{return new Xe(e,"")}if(r.path==="")return r;throw t_(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function d(H){H.path_=decodeURIComponent(H.path)}const p="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",x=new RegExp(`^https?://${v}/${p}/b/${s}/o${E}`,"i"),S={bucket:1,path:3},N=t===Vu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",F=new RegExp(`^https?://${N}/${s}/${V}`,"i"),M=[{regex:l,indices:h,postModify:o},{regex:x,indices:S,postModify:d},{regex:F,indices:{bucket:1,path:2},postModify:d}];for(let H=0;H<M.length;H++){const ae=M[H],K=ae.regex.exec(e);if(K){const w=K[ae.indices.bucket];let g=K[ae.indices.path];g||(g=""),r=new Xe(w,g),ae.postModify(r);break}}if(r==null)throw e_(e);return r}}class s_{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n,e,t){let r=1,s=null,o=null,a=!1,l=0;function h(){return l===2}let d=!1;function p(...V){d||(d=!0,e.apply(null,V))}function v(V){s=setTimeout(()=>{s=null,n(x,h())},V)}function E(){o&&clearTimeout(o)}function x(V,...F){if(d){E();return}if(V){E(),p.call(null,V,...F);return}if(h()||a){E(),p.call(null,V,...F);return}r<64&&(r*=2);let M;l===1?(l=2,M=0):M=(r+Math.random())*1e3,v(M)}let S=!1;function N(V){S||(S=!0,E(),!d&&(s!==null?(V||(l=2),clearTimeout(s),v(0)):V||(l=1)))}return v(0),o=setTimeout(()=>{a=!0,N(!0)},t),N}function o_(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n){return n!==void 0}function c_(n){return typeof n=="object"&&!Array.isArray(n)}function bi(n,e,t,r){if(r<e)throw Ai(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ai(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function l_(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ht;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ht||(Ht={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,r,s,o,a,l,h,d,p,v,E=!0,x=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=v,this.retry=E,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Fr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===Ht.NO_ERROR,h=o.getStatus();if(!l||u_(h,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===Ht.ABORT;r(!1,new Fr(!1,null,p));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new Fr(d,o))})},t=(r,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());a_(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=Du();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(s.canceled){const h=this.appDelete_?ku():Zg();a(h)}else{const h=Jg();a(h)}};this.canceled_?t(!1,new Fr(!1,null,!0)):this.backoffId_=i_(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&o_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function d_(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function f_(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function p_(n,e){e&&(n["X-Firebase-GMPID"]=e)}function m_(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function g_(n,e,t,r,s,o,a=!0,l=!1){const h=l_(n.urlParams),d=n.url+h,p=Object.assign({},n.headers);return p_(p,e),d_(p,t),f_(p,o),m_(p,r),new h_(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){let e;try{e=JSON.parse(n)}catch{return null}return c_(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function v_(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function E_(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="prefixes",Tc="items";function w_(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[wc])for(const s of t[wc]){const o=s.replace(/\/$/,""),a=n._makeStorageReference(new Xe(e,o));r.prefixes.push(a)}if(t[Tc])for(const s of t[Tc]){const o=n._makeStorageReference(new Xe(e,s.name));r.items.push(o)}return r}function T_(n,e,t){const r=__(t);return r===null?null:w_(n,e,r)}class ju{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){if(!n)throw Du()}function A_(n,e){function t(r,s){const o=T_(n,e,s);return I_(o!==null),o}return t}function Mu(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Yg():s=Qg():t.getStatus()===402?s=Kg(n.bucket):t.getStatus()===403?s=Xg(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function b_(n){const e=Mu(n);function t(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Wg(n.path)),o.serverResponse=s.serverResponse,o}return t}function x_(n,e,t,r,s){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",t.length>0&&(o.delimiter=t),r&&(o.pageToken=r),s&&(o.maxResults=s);const a=e.bucketOnlyServerUrl(),l=Ou(a,n.host,n._protocol),h="GET",d=n.maxOperationRetryTime,p=new ju(l,h,A_(n,e.bucket),d);return p.urlParams=o,p.errorHandler=Mu(e),p}function R_(n,e){const t=e.fullServerUrl(),r=Ou(t,n.host,n._protocol),s="DELETE",o=n.maxOperationRetryTime;function a(h,d){}const l=new ju(r,s,a,o);return l.successCodes=[200,204],l.errorHandler=b_(e),l}class S_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ht.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ht.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ht.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,o){if(this.sent_)throw $n("cannot .send() more than once");if(lr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $n("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $n("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $n("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $n("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class C_ extends S_{initXhr(){this.xhr_.responseType="text"}}function Lu(){return new C_}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this._service=e,t instanceof Xe?this._location=t:this._location=Xe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Qt(e,t)}get root(){const e=new Xe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return E_(this._location.path)}get storage(){return this._service}get parent(){const e=y_(this._location.path);if(e===null)return null;const t=new Xe(this._location.bucket,e);return new Qt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw r_(e)}}function P_(n){const e={prefixes:[],items:[]};return Fu(n,e).then(()=>e)}async function Fu(n,e,t){const s=await V_(n,{pageToken:t});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Fu(n,e,s.nextPageToken)}function V_(n,e){e!=null&&typeof e.maxResults=="number"&&bi("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=x_(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,Lu)}function N_(n){n._throwIfRoot("deleteObject");const e=R_(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Lu)}function D_(n,e){const t=v_(n._location.path,e),r=new Xe(n._location.bucket,t);return new Qt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){return/^[A-Za-z]+:\/\//.test(n)}function O_(n,e){return new Qt(n,e)}function Uu(n,e){if(n instanceof fo){const t=n;if(t._bucket==null)throw n_();const r=new Qt(t,t._bucket);return e!=null?Uu(r,e):r}else return e!==void 0?D_(n,e):n}function j_(n,e){if(e&&k_(e)){if(n instanceof fo)return O_(n,e);throw Ai("To use ref(service, url), the first argument must be a Storage instance.")}else return Uu(n,e)}function Ic(n,e){const t=e==null?void 0:e[Nu];return t==null?null:Xe.makeFromBucketSpec(t,n)}function M_(n,e,t,r={}){n.host=`${e}:${t}`;const s=lr(e);s&&(Lc(`https://${n.host}/b`),Uc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:Fc(o,n.app.options.projectId))}class fo{constructor(e,t,r,s,o,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=Vu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Gg,this._maxUploadRetryTime=Hg,this._requests=new Set,s!=null?this._bucket=Xe.makeFromBucketSpec(s,this._host):this._bucket=Ic(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xe.makeFromBucketSpec(this._url,e):this._bucket=Ic(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bi("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bi("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Hc(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qt(this,e)}_makeRequest(e,t,r,s,o=!0){if(this._deleted)return new s_(ku());{const a=g_(e,this._appId,r,s,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Ac="@firebase/storage",bc="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="storage";function L_(n){return n=et(n),P_(n)}function F_(n){return n=et(n),N_(n)}function U_(n,e){return n=et(n),j_(n,e)}function B_(n=Qc(),e){n=et(n);const r=Gc(n,Bu).getImmediate({identifier:e}),s=jc("storage");return s&&$_(r,...s),r}function $_(n,e,t,r={}){M_(n,e,t,r)}function q_(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new fo(t,r,s,e,Wc)}function z_(){Zn(new mn(Bu,q_,"PUBLIC").setMultipleInstances(!0)),Rt(Ac,bc,""),Rt(Ac,bc,"esm2020")}z_();var G_="firebase",H_="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(G_,H_,"app");const W_={apiKey:"AIzaSyBqNSX8DIBhqjBuapPcVOTAw7UCESg-oXI",authDomain:"animation-studio-mvp.firebaseapp.com",projectId:"animation-studio-mvp",storageBucket:"animation-studio-mvp.firebasestorage.app",messagingSenderId:"32447193910",appId:"1:32447193910:web:ec44c1dbff2d324d5b8997"},$u=Kc(W_),gr=Tg($u),K_=B_($u),_r="projects",Ys=async()=>{try{const n=kg(wu(gr,_r),Og("createdAt","desc")),e=await Ug(n),t=[];return e.forEach(r=>{var s,o;t.push({id:r.id,...r.data(),createdAt:((o=(s=r.data().createdAt)==null?void 0:s.toDate)==null?void 0:o.call(s))||new Date})}),console.log("Firebase: Retrieved",t.length,"projects"),t}catch(n){throw console.error("Error fetching projects:",n),n}},Q_=async n=>{var e,t;try{const r=Es(gr,_r,n),s=await Fg(r);if(s.exists())return{id:s.id,...s.data(),createdAt:((t=(e=s.data().createdAt)==null?void 0:e.toDate)==null?void 0:t.call(e))||new Date};throw new Error("Project not found")}catch(r){throw console.error("Error fetching project:",r),r}},qu=async n=>{try{const e=await qg(wu(gr,_r),{...n,createdAt:Ii(),updatedAt:Ii()});return console.log("Firebase: Created project with ID:",e.id),e.id}catch(e){throw console.error("Error creating project:",e),e}},Y_=async(n,e)=>{try{const t=Es(gr,_r,n);await Bg(t,{...e,updatedAt:Ii()}),console.log("Firebase: Updated project:",n)}catch(t){throw console.error("Error updating project:",t),t}},X_=async n=>{try{const e=await Q_(n),t=[];e.scenes&&Object.values(e.scenes).forEach(s=>{s.storedImage});try{const s=U_(K_,`images/${n}`),o=await L_(s),a=o.items.map(l=>F_(l));await Promise.all(a),o.items.length>0&&console.log(`Firebase: Deleted ${o.items.length} images for project:`,n)}catch(s){console.warn("Warning: Could not clean up storage images:",s)}const r=Es(gr,_r,n);await $g(r),console.log("Firebase: Deleted project:",n)}catch(e){throw console.error("Error deleting project:",e),e}},J_=async()=>{try{const n=JSON.parse(localStorage.getItem("projects")||"[]");if(n.length===0)return console.log("No local projects to migrate"),[];console.log("Migrating",n.length,"projects from localStorage to Firebase...");const e=[];for(const t of n)try{const r=await qu({name:t.name||"Untitled Project",author:t.author||"Unknown Author",storyText:t.storyText||"",totalPages:t.totalPages||0,scenes:t.scenes||{},pageDimensions:t.pageDimensions||null});e.push({...t,id:r}),console.log("Migrated project:",t.name||"Untitled")}catch(r){console.error("Failed to migrate project:",t.name,r)}return console.log("Migration complete. Migrated",e.length,"projects"),e}catch(n){throw console.error("Error during migration:",n),n}};function Z_(){const[n,e]=q.useState([]),[t,r]=q.useState(null),[s,o]=q.useState(!1),[a,l]=q.useState(""),[h,d]=q.useState(null),[p,v]=q.useState(!1),[E,x]=q.useState(!1),[S,N]=q.useState(!1),[V,F]=q.useState(""),[L,M]=q.useState(null),[H,ae]=q.useState(!1),[K,w]=q.useState(new Set),[g,y]=q.useState([]);q.useEffect(()=>{(ie=>new Promise((D,$)=>{if(document.querySelector(`script[src="${ie}"]`)){D();return}const Ue=document.createElement("script");Ue.src=ie,Ue.async=!0,Ue.onload=D,Ue.onerror=()=>$(new Error(`Failed to load script: ${ie}`)),document.body.appendChild(Ue)}))("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js").then(()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js"),o(!0)}).catch(ie=>{console.error(ie),l("Failed to load necessary libraries. Please refresh the page.")})},[]),q.useEffect(()=>{(async()=>{if(s)try{x(!0),JSON.parse(localStorage.getItem("projects")||"[]").length>0&&(console.log("Found local projects, migrating to Firebase..."),await J_(),localStorage.removeItem("projects"));const D=await Ys();e(D),v(!0),console.log("Loaded",D.length,"projects from Firebase")}catch(ie){console.error("Error loading projects:",ie),l("Failed to load projects. Please refresh the page.")}finally{x(!1)}})()},[s]);const T=async()=>{try{const ne=await qu({name:"Untitled Project",author:"Unknown Author",storyText:"",totalPages:0,scenes:{},pageDimensions:null}),ie=await Ys();e(ie),r(ne)}catch(ne){console.error("Error creating project:",ne),l("Failed to create project. Please try again.")}},I=async()=>{const ne=g.length>0?g:h?[h]:[];if(ne.length!==0)try{N(!0),M(null);const ie=ne.length>1,D=ie?`${ne.length} projects`:"project";F(`Preparing to delete ${D}...`),await new Promise(X=>setTimeout(X,500)),F("Cleaning up project files..."),await new Promise(X=>setTimeout(X,800)),F(`Removing ${D}...`);for(const X of ne)await X_(X.id),t===X.id&&r(null);F("Refreshing project list...");const $=await Ys();e($),d(null),y([]),N(!1),F(""),ie&&de()}catch(ie){console.error("Error deleting projects:",ie),N(!1),F(""),M("Failed to delete projects. Please try again.")}},A=()=>{d(null),y([]),N(!1),F(""),M(null)},_=()=>{ae(!0),w(new Set)},de=()=>{ae(!1),w(new Set)},be=ne=>{w(ie=>{const D=new Set(ie);return D.has(ne)?D.delete(ne):D.add(ne),D})},ze=()=>{K.size===n.length?w(new Set):w(new Set(n.map(ne=>ne.id)))},ge=()=>{const ne=n.filter(ie=>K.has(ie.id));y(ne)},Ge=q.useCallback(async(ne,ie)=>{try{await Y_(ne,ie),e(D=>D.map($=>$.id===ne?{...$,...ie}:$))}catch(D){console.error("Error updating project:",D)}},[]),rt=n.find(ne=>ne.id===t);return!s||E?m.jsxs("div",{className:"min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center",children:[m.jsx(os,{className:"animate-spin mr-2"}),s?"Loading Projects...":"Loading Libraries..."]}):a?m.jsxs("div",{className:"min-h-screen bg-gray-900 text-red-400 flex items-center justify-center p-4 text-center",children:[m.jsx(Jn,{className:"mr-2"}),a]}):t&&rt?m.jsx(Kh,{project:rt,updateProject:Ge,goToDashboard:()=>r(null),libraryError:a}):m.jsxs(m.Fragment,{children:[m.jsx(Nc,{project:h,projects:g,onConfirm:I,onCancel:A,isDeleting:S,deleteProgress:V,deleteError:L}),m.jsx(Vh,{projects:n,createNewProject:T,deleteProject:ne=>d(ne),selectProject:r,selectionMode:H,selectedProjects:K,onEnterSelectionMode:_,onExitSelectionMode:de,onToggleProjectSelection:be,onToggleSelectAll:ze,onBulkDelete:ge})]})}Xs.createRoot(document.getElementById("root")).render(m.jsx(_h.StrictMode,{children:m.jsx(Z_,{})}));

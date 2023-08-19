<h1><a href="https://sgpt-client.fly.dev" target="_blank">Live Web App</a></h1>
<h2>📝 Project Description</h2>
<p>Upload your PDF/MP3 files and chat with its contents. The data is converted into embeddings and stored in a vector database, Pinecone. Queries are made with the help of Langchain and OpenAI's embeddings search.</p>
</br>
<h2>✅ Features</h2>
<ul>
<li>Familiar ChatGPT UI</li>
<li>Upload and stores files (PDF/MP3 supported) into Pinecone</li>
<li>Make conversation and queries to OpenAI's GPT3.5 with knowledge on the file's content</li>
<li>Manage conversations and files</li>
<li>Persistent conversations and files using Local Storage</li>
</ul>
</br>
<h2>📚 Development Stack:</h2>
<ul>
<li><a href="https://www.solidjs.com/">SolidJS</a></li>
<li><a href="https://expressjs.com/">ExpressJS</a></li>
<li><a href="https://nodejs.org/en">NodeJS</a></li>
<li><a href="https://www.pinecone.io/">Pinecone</a></li>
</ul>
</br>
<h2>🛠 Setting up local development environment:</h2>
<ul>
<li>Create a Pinecone account, and setup index</li>
<li>Create a new folder and <code>git clone https://github.com/sweic/filegpt.git</code></li>
<li>Fill up the <code>.env.example</code> file inside client and server subfolder and rename to <code>.env</code></li>
<li><code>npm install</code> in the client subfolder</li>
<li>To start client, run <code>npm run dev</code> in client subfolder
<li>App should be running on <code>http://localhost:3000/</code></li>
<li>To start server, run <code>npm run nodemon</code></li>
</ul>
</br>
<h2>🛣️ Roadmap</h2>
<ul>
<li>Better error handling</li>
</ul>
</br>
</br>

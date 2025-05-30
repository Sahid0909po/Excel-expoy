body {
  font-family: sans-serif;
  background: #f9f9f9;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 1100px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

input, select, button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 15px;
  border-left: 5px solid;
  transform: perspective(500px) rotateX(1deg);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: perspective(500px) rotateX(0deg) scale(1.03);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.basic { border-color: green; }
.intermediate { border-color: blue; }
.advanced { border-color: red; }

.card h3 { margin: 0; }
.card .type { font-size: 0.9em; color: #555; }
.card .desc { margin-top: 10px; }
.card .example { font-style: italic; color: #666; margin-top: 5px; }

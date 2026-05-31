*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

body{
background:#050505;
color:white;
}

nav{
display:flex;
justify-content:space-between;
padding:25px 10%;
position:fixed;
width:100%;
background:#000;
z-index:1000;
}

nav ul{
display:flex;
gap:30px;
list-style:none;
}

nav a{
color:white;
text-decoration:none;
}

.hero{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero h1{
font-size:80px;
}

.hero h2{
color:#00d4ff;
margin:20px 0;
}

.hero p{
max-width:700px;
margin:auto;
line-height:1.8;
}

.btn{
display:inline-block;
margin-top:30px;
padding:15px 35px;
background:#00d4ff;
color:black;
border-radius:40px;
text-decoration:none;
font-weight:600;
}

section{
padding:120px 10%;
}

section h2{
margin-bottom:40px;
font-size:40px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:20px;
}

.grid div{
background:#111;
padding:25px;
border-radius:15px;
text-align:center;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:#111;
padding:30px;
border-radius:20px;
transition:.3s;
}

.card:hover{
transform:translateY(-10px);
}

#contact{
text-align:center;
}

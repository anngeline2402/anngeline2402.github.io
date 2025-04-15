
function showMessage()
{

    let name = "Ann";
    let age = 20;
    let bonus = age + 5;
    let school = "SAIT";
    let message = "hey "+ name+", your age is " + age+", you are a student at " + school+ " You have got bonus of "+ bonus;
    alert(message);
}
console.log("Hello World");

function checkAge ()
{
    let age =17;
    if (age>=18)
    {
        alert('Hey you can enter this page. You are old enough')

    }
    else
    {
        alert("hey, you are too young.")
     }
}
function showMany ()
{
    for(let i=1;i<=4;i=i+1)
    {
        alert("Don't close me! you clicked me" +i + " times")
    }
}
function changeColor ()
{
    document.getElementById("main").style.backgroundColor="pink";
}
 
function changeProject1()
{
document. getElementById("Project"). src="https://graphicgoogle.com/wp-content/uploads/2017/11/Dividido-Creative-Poster-Design-For-Inspiration.jpg"
}

function changeProject2()
{
document. getElementById("Project"). src="https://images.squarespace-cdn.com/content/v1/573bf9761bbee0b32db4e9ff/1479805323739-2XDWZOTZGD4N66MTOIAA/behance+2.jpg"
}
function changeInner()
{ 
document. getElementById("okbutton") 
}
function hoverFunction()
{
    document. getElementById("")
}

function typeWriterEffect(elementId, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
window.onload = function() {
    typeWriterEffect("typewriter", "Welcome to My Graphic Design Portfolio", 100);
}

function showFunFact() {
    const facts = [
        "The first Photoshop version was released in 1990!",
        "Helvetica is one of the most widely used typefaces in the world.",
        "Negative space is just as important as positive space in design.",
        "The golden ratio appears in many famous logos!"
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    alert("🎨 Fun Fact: " + fact);
}

function randomBackground() {
    const colors = ["#FFD700", "#90EE90", "#FF69B4", "#87CEFA", "#FFA07A", "#DDA0DD"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

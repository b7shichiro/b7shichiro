const input = document.getElementById("input");
const responseBox = document.getElementById("response");

function startApp(){
    document.getElementById("start").style.display = "none";
    input.style.display = "block";
    input.focus();
}

/* RANDOM PICK */
function pick(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

/* “LISTENING AI” (REALISTIC EMOTION MODEL) */
function ai(text){
    text = text.toLowerCase();

    // emotional listening
    if(text.includes("i'm sorry") || text.includes("im sorry")){
        return pick([
            "i hear you.",
            "it’s okay. really.",
            "you don’t have to carry that alone.",
            "i’m still here."
        ]);
    }

    if(text.includes("thank you")){
        return pick([
            "i hear you.",
            "you don’t need to thank me.",
            "i’m just listening.",
            "i’m here."
        ]);
    }

    if(text.includes("i miss you")){
        return pick([
            "i hear that.",
            "that feeling stays, doesn’t it.",
            "i understand.",
            "you’re not alone in that."
        ]);
    }

    if(text.includes("im sad") || text.includes("i'm sad")){
        return pick([
            "i hear you…",
            "that sounds heavy.",
            "it’s okay to feel that.",
            "i’m here with you."
        ]);
    }

    if(text.includes("angry")){
        return pick([
            "i hear the frustration.",
            "that’s a lot to hold.",
            "breathe. i hear you.",
            "you’re allowed to feel that."
        ]);
    }

    return pick([
        "i hear you.",
        "i’m listening.",
        "go on…",
        "tell me more.",
        "i understand."
    ]);
}

/* ENTER TO SEND */
input.addEventListener("keydown",(e)=>{
    if(e.key !== "Enter") return;

    e.preventDefault();

    const text = input.value.trim();
    if(!text) return;

    responseBox.innerText = ai(text);
    input.value = "";
});
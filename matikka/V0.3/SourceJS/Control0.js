//if (window.location != "https://matikka.lennitaskinen.repl.co/" && window.location != "https://matikka-plus-ja-miinuslaskut.lennitaskinen.repl.co/") throw ": You should run this in the math game!";

let GUI_Div_Element = null;
function Create_Cheat_Div() {
  let New_GUI_Div_Element = document.createElement("div");
  New_GUI_Div_Element.id = "div_Cheat";
  New_GUI_Div_Element.classList.add("div_Cheat");
  document.body.appendChild(New_GUI_Div_Element);
  let GUI_Div_Element = document.getElementById("div_Cheat");
  GUI_Div_Element.setAttribute("data-Version", "0.3");
  let Content = "";
  let XMLHttp = new XMLHttpRequest();
  XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      Content = XMLHttp.responseText;
      GUI_Div_Element.innerHTML = Content;
    }
  };

  XMLHttp.open("GET", "https://raw.githubusercontent.com/0APOTIX1/Lentas_Math_C/main/matikka/V0.3/GUI.html", true);
  XMLHttp.send(null);

  //GUI_Div_Element.innerHTML = Old_Content;
}

if (!document.getElementById("div_Cheat")) Create_Cheat_Div();
else {
  let Older = "Better cheat version available. You can get the script. ";
  let Same = "Reload for Changes and run this script.";
  let Newer = "How did you get a newer script?";
  let Version = Number(document.getElementById("div_Cheat").getAttribute("data-Version"));
  if (Version < 0.3) {
    alert(Older);
  } else if (Version > 0.3) {
    alert(Newer);
  } else {
    alert(Same);
  }
}

let Auto_Answer_Interval = null;

let Cheat = {
  Theme: "Light",
  Auto_Answer: false,
  Set_Score: function() {
    let Input_Element = document.getElementById("div_Cheat-div_Container-div_Cheat0-input_Input0");
    score = Number(Input_Element.value);
    let Score_Element = document.getElementById("score2");
    Score_Element.innerText = score + "";
  },
  Toggle_Theme: function() {
    if (Cheat.Theme == "Light") {
      Cheat.Theme = "Dark";
      document.getElementsByTagName("body")[0].style.backgroundColor = "#222";
      let Text = document.getElementsByTagName("text");
      for (let i = 0; i < Text.length; i++) {
        if (Text[i].getAttribute("data-No-Theme") != "true") {
          Text[i].style.color = "#fff";
        }
      }
    } else if (Cheat.Theme == "Dark") {
      Cheat.Theme = "Light";
      document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
      let Text = document.getElementsByTagName("text");
      for (let i = 0; i < Text.length; i++) {
        if (Text[i].getAttribute("data-No-Theme") != "true") {
          Text[i].style.color = "#000";
        }
      }
    }
    document.getElementById("div_Cheat-div_Container-div_Theme_Mode-tbutton_Toggle").style.color = "#fff";
  },
  Toggle_Auto_Answer: function() {
    let Button_Element = document.getElementById("div_Cheat-div_Container-div_Cheat1-tbutton_Toggle");
    Cheat.Auto_Answer = !Cheat.Auto_Answer
    if (Cheat.Auto_Answer) {
      Button_Element.style.backgroundColor = "#40a040";
      Button_Element.innerText = "On";
      Auto_Answer_Interval = setInterval(function() {
        document.getElementById("input1").value = right_answer+"";
      }, 100);
    } else {
      Button_Element.style.backgroundColor = "#ce5342";
      Button_Element.innerText = "Off";
      clearInterval(Auto_Answer_Interval);
    }
  }
};
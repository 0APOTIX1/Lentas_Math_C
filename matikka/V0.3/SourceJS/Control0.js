//if (window.location != "https://matikka.lennitaskinen.repl.co/" && window.location != "https://matikka-plus-ja-miinuslaskut.lennitaskinen.repl.co/") throw ": You should run this in the math game!";

let GUI_Div_Element = null;
function Create_Cheat_Div() {
  let New_GUI_Div_Element = document.createElement("div");
  New_GUI_Div_Element.id = "div_Cheat";
  New_GUI_Div_Element.classList.add("div_Cheat");
  document.body.appendChild(New_GUI_Div_Element);
  let GUI_Div_Element = document.getElementById("div_Cheat");
  GUI_Div_Element.setAttribute("data-Version", "0.1");
  let Old_Content = "<div class=\"div_Cheat-div_Container\" id=\"div_Cheat-div_Container\" style=\"position: absolute; top: 5px; right: 50px; width: 400px; height: 600px; background: #303030d0; border-radius: 15px;\">\n  <text style=\"position: absolute; top: 8px; left: 50%; transform: translate(-50%, 0px); font-family: arial; font-size: 33px; color: #fff;\" data-No-Theme=\"true\" class=\"div_Cheat-div_Container-text_Test\" id=\"div_Cheat-div_Container-text_Test\">Cheat</text>\n  <div style=\"position: absolute; top: 60px; left: 0px; width: 100%; height: 40px;\" id=\"div_Cheat-div_Container-div_Cheat0\" class=\"div_Cheat-div_Container-div_Cheat0\">\n    <input type=\"number\" style=\"height: 30px; width: 180px; background-color: #333; color:#fff;\" id=\"div_Cheat-div_Container-div_Cheat0-input_Input0\" class=\"div_Cheat-div_Container-div_Cheat0-input_Input0\">\n    <text style=\"user-select: none; padding: 10px 10px; border-radius: 7px; background-color: #4080e0; font-family: arial; color: #fff;\" data-No-Theme=\"true\" id=\"div_Cheat-div_Container-div_Cheat0-tbutton_Input1\" class=\"div_Cheat-div_Container-div_Cheat0-tbutton_Input1\" onclick=\"Cheat.Set_Score();\">Set Score</text>\n  </div>\n  <div style=\"position: absolute; top: 110px; left: 0px; width: 100%; height: 40px;\" id=\"div_Cheat-div_Container-div_Cheat1\" class=\"div_Cheat-div_Container-div_Cheat1\">\n    <text style=\"font-family: arial; font-size: 20px; color: #fff;\" data-No-Theme=\"true\" id=\"div_Cheat-div_Container-div_Cheat1-text_Description\" class=\"div_Cheat-div_Container-div_Cheat1-text_Description\">Automatic answer</text>\n    <text style=\"user-select: none; padding: 10px 10px; border-radius: 7px; background-color: #ce5342; font-family: arial; color: #fff;\"  onclick=\"Cheat.Toggle_Auto_Answer();\" data-No-Theme=\"true\" id=\"div_Cheat-div_Container-div_Cheat1-tbutton_Toggle\" class=\"div_Cheat-div_Container-div_Cheat1-tbutton_Toggle\">Off</text>\n  </div>\n  <div style=\"position: absolute; top: 160px; left: 0px; width: 100%; height: 40px;\" id=\"div_Cheat-div_Container-div_Cheat2\" class=\"div_Cheat-div_Container-div_Cheat2\">\n    <text style=\"font-family: arial; color: #fff;\" id=\"div_Cheat-div_Container-div_Cheat2-text_Description\" class=\"div_Cheat-div_Container-div_Cheat2-text_Description\">Just another</text>\n  </div>\n  <div style=\"position: absolute; bottom: 35px; left: 0px; width: 100%;\" id=\"div_Cheat-div_Container-div_Theme_Mode\" class=\"div_Cheat-div_Container-div_Theme_Mode\">\n    <text style=\"user-select: none; position: absolute; right: 13px; padding: 6px 6px; background-color: #222; color: #fff; border-radius: 5px; font-family: arial; font-size: 15px;\" onclick=\"Cheat.Toggle_Theme();\" data-No-Theme=\"true\" id=\"div_Cheat-div_Container-div_Theme_Mode-tbutton_Toggle\" class=\"div_Cheat-div_Container-div_Theme_Mode-tbutton_Toggle\">Toggle Theme</text>\n  </div>\n</div>";
  let Content = "";
  let XMLHttp = new XMLHttpRequest();
  
  GUI_Div_Element.innerHTML = Old_Content;
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
const express = require("express");
const app = express.Router();
app.get("/", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Distracted_Boyfriend";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Drake_Hotline_Bling", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Drake_Hotline_Bling";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Distracted_Boyfriend", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Distracted_Boyfriend";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Two_Buttons", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Two_Buttons";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Change_My_Mind", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Change_My_Mind";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Running_Away_Balloon", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Running_Away_Balloon";
    },
    controlbox: function () {
      return "5_box";
    },
  });
});
app.get("/Mocking_Spongebob", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mocking_Spongebob";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/UNO_Draw_25_Cards", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "UNO_Draw_25_Cards";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Left_Exit_12_Off_Ramp", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Left_Exit_12_Off_Ramp";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Expanding_Brain", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Expanding_Brain";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Batman_Slapping_Robin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Batman_Slapping_Robin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Monkey_Puppet", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Monkey_Puppet";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Woman_Yelling_At_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Woman_Yelling_At_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Boardroom_Meeting_Suggestion", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Boardroom_Meeting_Suggestion";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Blank_Nut_Button", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Nut_Button";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Is_This_A_Pigeon", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Is_This_A_Pigeon";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Waiting_Skeleton", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Waiting_Skeleton";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Panik_Kalm_Panik", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Panik_Kalm_Panik";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Bernie_I_Am_Once_Again_Asking_For_Your_Support", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bernie_I_Am_Once_Again_Asking_For_Your_Support";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Tuxedo_Winnie_The_Pooh", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Tuxedo_Winnie_The_Pooh";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Epic_Handshake", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Epic_Handshake";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Inhaling_Seagull", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Inhaling_Seagull";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Surprised_Pikachu", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Surprised_Pikachu";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Disaster_Girl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Disaster_Girl";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sad_Pablo_Escobar", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sad_Pablo_Escobar";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/X,_X_Everywhere", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "X,_X_Everywhere";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hide_the_Pain_Harold", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hide_the_Pain_Harold";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Roll_Safe_Think_About_It", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Roll_Safe_Think_About_It";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/American_Chopper_Argument", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "American_Chopper_Argument";
    },
    controlbox: function () {
      return "5_box";
    },
  });
});
app.get("/The_Scroll_Of_Truth", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Scroll_Of_Truth";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/One_Does_Not_Simply", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "One_Does_Not_Simply";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ancient_Aliens", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ancient_Aliens";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Trump_Bill_Signing", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Trump_Bill_Signing";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Unsettled_Tom", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Unsettled_Tom";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Rock_Driving", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Rock_Driving";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Who_Killed_Hannibal", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Who_Killed_Hannibal";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/They're_The_Same_Picture", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "They're_The_Same_Picture";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Spongebob_Ight_Imma_Head_Out", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spongebob_Ight_Imma_Head_Out";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Finding_Neverland", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Finding_Neverland";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Y'all_Got_Any_More_Of_That", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Y'all_Got_Any_More_Of_That";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hard_To_Swallow_Pills", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hard_To_Swallow_Pills";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Futurama_Fry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Futurama_Fry";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Oprah_You_Get_A", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Oprah_You_Get_A";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Doge", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Doge";
    },
    controlbox: function () {
      return "5_box";
    },
  });
});
app.get("/Third_World_Skeptical_Kid", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Third_World_Skeptical_Kid";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Evil_Kermit", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Evil_Kermit";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Don't_You_Squidward", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Don't_You_Squidward";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Third_World_Success_Kid", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Third_World_Success_Kid";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Star_Wars_Yoda", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Star_Wars_Yoda";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Marked_Safe_From", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Marked_Safe_From";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grandma_Finds_The_Internet", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grandma_Finds_The_Internet";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Leonardo_Dicaprio_Cheers", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Leonardo_Dicaprio_Cheers";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Most_Interesting_Man_In_The_World", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Most_Interesting_Man_In_The_World";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Who_Would_Win", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Who_Would_Win";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/That_Would_Be_Great", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "That_Would_Be_Great";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/First_World_Problems", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "First_World_Problems";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Laughing_Men_In_Suits", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Laughing_Men_In_Suits";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/But_That's_None_Of_My_Business", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "But_That's_None_Of_My_Business";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Evil_Toddler", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Evil_Toddler";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Y_U_No", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Y_U_No";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Black_Girl_Wat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Black_Girl_Wat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/This_Is_Fine", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "This_Is_Fine";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/This_Is_Where_I'd_Put_My_Trophy_If_I_Had_One", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "This_Is_Where_I'd_Put_My_Trophy_If_I_Had_One";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sleeping_Shaq", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sleeping_Shaq";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jack_Sparrow_Being_Chased", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jack_Sparrow_Being_Chased";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Presidential_Alert", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Presidential_Alert";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Luck_Brian", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Luck_Brian";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/See_Nobody_Cares", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "See_Nobody_Cares";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Brace_Yourselves_X_is_Coming", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Brace_Yourselves_X_is_Coming";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Imagination_Spongebob", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Imagination_Spongebob";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Peter_Parker_Cry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Peter_Parker_Cry";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Squidward", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Squidward";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Say_it_Again,_Dexter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Say_it_Again,_Dexter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Look_At_Me", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Look_At_Me";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Creepy_Condescending_Wonka", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Creepy_Condescending_Wonka";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Well_Yes,_But_Actually_No", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Well_Yes,_But_Actually_No";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/X_All_The_Y", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "X_All_The_Y";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Put_It_Somewhere_Else_Patrick", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Put_It_Somewhere_Else_Patrick";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scared_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scared_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Too_Damn_High", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Too_Damn_High";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Maury_Lie_Detector", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Maury_Lie_Detector";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Uncle_Sam", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Uncle_Sam";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Success_Kid", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Success_Kid";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Keep_Calm_And_Carry_On_Red", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Keep_Calm_And_Carry_On_Red";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Matrix_Morpheus", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Matrix_Morpheus";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Yo_Dawg_Heard_You", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Yo_Dawg_Heard_You";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Marvel_Civil_War_1", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Marvel_Civil_War_1";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I'll_Just_Wait_Here", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I'll_Just_Wait_Here";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dr_Evil_Laser", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dr_Evil_Laser";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mugatu_So_Hot_Right_Now", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mugatu_So_Hot_Right_Now";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Me_And_The_Boys", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Me_And_The_Boys";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Be_Like_Bill", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Be_Like_Bill";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Surprised_Koala", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Surprised_Koala";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Philosoraptor", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Philosoraptor";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Should_Buy_A_Boat_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Should_Buy_A_Boat_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Face_You_Make_Robert_Downey_Jr", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Face_You_Make_Robert_Downey_Jr";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sparta_Leonidas", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sparta_Leonidas";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/And_Just_Like_That", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "And_Just_Like_That";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Am_I_The_Only_One_Around_Here", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Am_I_The_Only_One_Around_Here";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Captain_Picard_Facepalm", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Captain_Picard_Facepalm";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I'm_The_Captain_Now", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I'm_The_Captain_Now";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Simba_Shadowy_Place", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Simba_Shadowy_Place";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pentagon_Hexagon_Octagon", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pentagon_Hexagon_Octagon";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Good_Fellas_Hilarious", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Good_Fellas_Hilarious";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Happy_Star_Congratulations", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Happy_Star_Congratulations";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Pepperidge_Farm_Remembers", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pepperidge_Farm_Remembers";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Shut_Up_And_Take_My_Money_Fry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Shut_Up_And_Take_My_Money_Fry";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Car_Salesman_Slaps_Roof_Of_Car", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Car_Salesman_Slaps_Roof_Of_Car";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Aaaaand_Its_Gone", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Aaaaand_Its_Gone";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Buddy_Christ", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Buddy_Christ";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Picard_Wtf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Picard_Wtf";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bird_Box", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bird_Box";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Here's_Johnny", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Here's_Johnny";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Star_Wars_No", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Star_Wars_No";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Pun_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Pun_Dog";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Say_That_Again_I_Dare_You", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Say_That_Again_I_Dare_You";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mr_Krabs_Blur_Meme", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mr_Krabs_Blur_Meme";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/And_everybody_loses_their_minds", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "And_everybody_loses_their_minds";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Kevin_Hart", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Kevin_Hart";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/What_Do_We_Want", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "What_Do_We_Want";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Satisfied_Seal", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Satisfied_Seal";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Starter_Pack", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Starter_Pack";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Afraid_To_Ask_Andy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Afraid_To_Ask_Andy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Socially_Awesome_Awkward_Penguin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Socially_Awesome_Awkward_Penguin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Confession_Bear", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Confession_Bear";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Its_Not_Going_To_Happen", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Its_Not_Going_To_Happen";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Success_Kid_Original", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Success_Kid_Original";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Oprah_You_Get_A_Car_Everybody_Gets_A_Car", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Oprah_You_Get_A_Car_Everybody_Gets_A_Car";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/10_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "10_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Arthur_Fist", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Arthur_Fist";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chef_Gordon_Ramsay", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chef_Gordon_Ramsay";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Cool_Cat_Stroll", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cool_Cat_Stroll";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/That's_a_paddlin'", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "That's_a_paddlin'";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Inception", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Inception";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Archer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Archer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bender", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bender";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Liam_Neeson_Taken", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Liam_Neeson_Taken";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Confused_Gandalf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Confused_Gandalf";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Cute_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cute_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scumbag_Steve", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scumbag_Steve";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_See_Dead_People", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_See_Dead_People";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jackie_Chan_WTF", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jackie_Chan_WTF";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_Were_The_Chosen_One_(Star_Wars)", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_Were_The_Chosen_One_(Star_Wars)";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Spiderman_Peter_Parker", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spiderman_Peter_Parker";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/PPAP", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "PPAP";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Peter_Griffin_News", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Peter_Griffin_News";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Back_In_My_Day", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Back_In_My_Day";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Why_Can't_I_Hold_All_These_Limes", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Why_Can't_I_Hold_All_These_Limes";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Warning_Sign", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Warning_Sign";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rick_and_Carl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rick_and_Carl";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Gollum", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gollum";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Money_Money", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Money_Money";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Spongegar", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spongegar";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/First_Day_On_The_Internet_Kid", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "First_Day_On_The_Internet_Kid";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chubby_Bubbles_Girl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chubby_Bubbles_Girl";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Smiling_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Smiling_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Unpopular_Opinion_Puffin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Unpopular_Opinion_Puffin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Conspiracy_Keanu", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Conspiracy_Keanu";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Heavy_Breathing_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Heavy_Breathing_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dwight_Schrute", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dwight_Schrute";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/How_Tough_Are_You", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "How_Tough_Are_You";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/These_Aren't_The_Droids_You_Were_Looking_For", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "These_Aren't_The_Droids_You_Were_Looking_For";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Michael_Jackson_Popcorn", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Michael_Jackson_Popcorn";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Table_Flip_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Table_Flip_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/LIGAF", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "LIGAF";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ermahgerd_Berks", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ermahgerd_Berks";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ron_Burgundy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ron_Burgundy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Leonardo_Dicaprio_Wolf_Of_Wall_Street", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Leonardo_Dicaprio_Wolf_Of_Wall_Street";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Was_Told_There_Would_Be", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Was_Told_There_Would_Be";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Persian_Cat_Room_Guardian", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Persian_Cat_Room_Guardian";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Computer_Guy_Facepalm", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Computer_Guy_Facepalm";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Right_In_The_Childhood", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Right_In_The_Childhood";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Captain_Phillips_-_I'm_The_Captain_Now", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Captain_Phillips_-_I'm_The_Captain_Now";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Lion_King", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Lion_King";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Alien_Meeting_Suggestion", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Alien_Meeting_Suggestion";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Overly_Attached_Girlfriend", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Overly_Attached_Girlfriend";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Transparent_Square", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Transparent_Square";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Obi_Wan_Kenobi", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Obi_Wan_Kenobi";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Computer_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Computer_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Look_At_All_These", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Look_At_All_These";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Spiderman_Computer_Desk", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spiderman_Computer_Desk";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_Underestimate_My_Power", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_Underestimate_My_Power";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Batman_Smiles", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Batman_Smiles";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Skeptical_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Skeptical_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Slowpoke", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Slowpoke";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_Should_Feel_Bad_Zoidberg", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_Should_Feel_Bad_Zoidberg";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Smilin_Biden", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Smilin_Biden";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Car_Salesman_Slaps_Hood", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Car_Salesman_Slaps_Hood";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Krusty_Krab_Vs_Chum_Bucket", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Krusty_Krab_Vs_Chum_Bucket";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sudden_Clarity_Clarence", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sudden_Clarity_Clarence";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ain't_Nobody_Got_Time_For_That", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ain't_Nobody_Got_Time_For_That";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Evil_Plotting_Raccoon", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Evil_Plotting_Raccoon";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Shrek_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Shrek_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Darti_Boy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Darti_Boy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/What_Do_We_Want_3", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "What_Do_We_Want_3";
    },
    controlbox: function () {
      return "6_box";
    },
  });
});
app.get("/No_Patrick", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "No_Patrick";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Spiderman_Hospital", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spiderman_Hospital";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ceiling_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ceiling_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Unicorn_MAN", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Unicorn_MAN";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Internet_Explorer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Internet_Explorer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Alright_Gentlemen_We_Need_A_New_Idea", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Alright_Gentlemen_We_Need_A_New_Idea";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Chuck_Norris_Approves", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_Approves";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Unhelpful_High_School_Teacher", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Unhelpful_High_School_Teacher";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/1990s_First_World_Problems", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "1990s_First_World_Problems";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mr_T_Pity_The_Fool", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mr_T_Pity_The_Fool";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Consuela", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Consuela";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Liam_Neeson_Taken_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Liam_Neeson_Taken_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Inigo_Montoya", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Inigo_Montoya";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Too_Like_To_Live_Dangerously", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Too_Like_To_Live_Dangerously";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/DJ_Pauly_D", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "DJ_Pauly_D";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Good_Guy_Greg", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Good_Guy_Greg";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/So_I_Got_That_Goin_For_Me_Which_Is_Nice", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "So_I_Got_That_Goin_For_Me_Which_Is_Nice";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Joseph_Ducreux", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Joseph_Ducreux";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Have_No_Idea_What_I_Am_Doing", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Have_No_Idea_What_I_Am_Doing";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Joe_Biden", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Joe_Biden";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Original_Stoner_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Original_Stoner_Dog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Awkward_Moment_Sealion", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Awkward_Moment_Sealion";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Know_That_Feel_Bro", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Know_That_Feel_Bro";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Frustrated_Boromir", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Frustrated_Boromir";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Deadpool_Surprised", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Deadpool_Surprised";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Look_Son", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Look_Son";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Comic_Panel_2x2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Comic_Panel_2x2";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Young_Cardi_B", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Young_Cardi_B";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I'll_Have_You_Know_Spongebob", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I'll_Have_You_Know_Spongebob";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get(
  "/So_I_Guess_You_Can_Say_Things_Are_Getting_Pretty_Serious",
  (req, res) => {
    res.render("index", {
      memebox: function () {
        return "So_I_Guess_You_Can_Say_Things_Are_Getting_Pretty_Serious";
      },
      controlbox: function () {
        return "2_box";
      },
    });
  }
);
app.get("/It's_Finally_Over", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "It's_Finally_Over";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Comic_Panel_1x2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Comic_Panel_1x2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Laughing_Villains", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Laughing_Villains";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Talk_To_Spongebob", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Talk_To_Spongebob";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Luck_Bear", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Luck_Bear";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Excited_Minions", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Excited_Minions";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Kim_Jong_Un_Sad", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Kim_Jong_Un_Sad";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Baby_Godfather", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Baby_Godfather";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dad_Joke_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dad_Joke_Dog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sexy_Railroad_Spiderman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sexy_Railroad_Spiderman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Welcome_To_The_Internets", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Welcome_To_The_Internets";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Secure_Parking", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Secure_Parking";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Impossibru_Guy_Original", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Impossibru_Guy_Original";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/What_Year_Is_It", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "What_Year_Is_It";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Guarantee_It", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Guarantee_It";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chemistry_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chemistry_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Spiderman_Laugh", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spiderman_Laugh";
    },
    controlbox: function () {
      return "4_box";
    },
  });
});
app.get("/Interupting_Kanye", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Interupting_Kanye";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Permission_Bane", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Permission_Bane";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Chef_Gordon_Ramsay", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Chef_Gordon_Ramsay";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Snape", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Snape";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pissed_Off_Obama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pissed_Off_Obama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Good_Guy_Putin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Good_Guy_Putin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Toddler", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Toddler";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/High_Expectations_Asian_Father", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "High_Expectations_Asian_Father";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Have_No_Idea_What_I_Am_Doing_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Have_No_Idea_What_I_Am_Doing_Dog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/But_That's_None_Of_My_Business_(Neutral)", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "But_That's_None_Of_My_Business_(Neutral)";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Birthday", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Birthday";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Short_Satisfaction_VS_Truth", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Short_Satisfaction_VS_Truth";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scary_Harry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scary_Harry";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Socially_Awkward_Awesome_Penguin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Socially_Awkward_Awesome_Penguin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Not_Amused", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Not_Amused";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Comic_Book_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Comic_Book_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/RPG_Fan", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "RPG_Fan";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Persian_Cat_Room_Guardian_Single", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Persian_Cat_Room_Guardian_Single";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sidious_Error", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sidious_Error";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Minor_Mistake_Marvin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Minor_Mistake_Marvin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Patriotic_Eagle", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Patriotic_Eagle";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rick_and_Carl_Long", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rick_and_Carl_Long";
    },
    controlbox: function () {
      return "8_box";
    },
  });
});
app.get("/Insanity_Wolf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Insanity_Wolf";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ugly_Twins", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ugly_Twins";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Evil_Cows", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Evil_Cows";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Nuclear_Explosion", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Nuclear_Explosion";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/1950s_Middle_Finger", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "1950s_Middle_Finger";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Doge_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Doge_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Kill_Yourself_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Kill_Yourself_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Member_Berries", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Member_Berries";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sad_Keanu", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sad_Keanu";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Castaway_Fire", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Castaway_Fire";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hohoho", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hohoho";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chocolate_Spongebob", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chocolate_Spongebob";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chainsaw_Bear", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chainsaw_Bear";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Well_That_Escalated_Quickly", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Well_That_Escalated_Quickly";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Cool_Obama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cool_Obama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/ZNMD", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "ZNMD";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Priority_Peter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Priority_Peter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/NPC", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "NPC";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Travelonshark", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Travelonshark";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hey_Internet", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hey_Internet";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_The_Real_MVP", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_The_Real_MVP";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Storytelling_Grandpa", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Storytelling_Grandpa";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ryan_Gosling", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ryan_Gosling";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Karate_Kyle", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Karate_Kyle";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Business_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Business_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Troll_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Troll_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/How_About_No_Bear", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "How_About_No_Bear";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Excited_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Excited_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Buddy_The_Elf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Buddy_The_Elf";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pathetic_Spidey", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pathetic_Spidey";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Why_Not_Both", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Why_Not_Both";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/First_World_Stoner_Problems", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "First_World_Stoner_Problems";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Cereal_Guy_Spitting", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cereal_Guy_Spitting";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Marvel_Civil_War", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Marvel_Civil_War";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fear_And_Loathing_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fear_And_Loathing_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Keep_Calm_And_Carry_On_Black", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Keep_Calm_And_Carry_On_Black";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Why_Is_The_Rum_Gone", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Why_Is_The_Rum_Gone";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Overly_Manly_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Overly_Manly_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/WTF", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "WTF";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Redditor's_Wife", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Redditor's_Wife";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Evil_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Evil_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Super_Cool_Ski_Instructor", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Super_Cool_Ski_Instructor";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jack_Nicholson_The_Shining_Snow", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jack_Nicholson_The_Shining_Snow";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris_Guns", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_Guns";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/LOL_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "LOL_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mario_Hammer_Smash", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mario_Hammer_Smash";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/College_Liberal", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "College_Liberal";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Burn_Kitty", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Burn_Kitty";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Guinness_World_Record", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Guinness_World_Record";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bazooka_Squirrel", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bazooka_Squirrel";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mr_Mackey", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mr_Mackey";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mad_Money_Jim_Cramer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mad_Money_Jim_Cramer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Duck_Face_Chicks", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Duck_Face_Chicks";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Neil_deGrasse_Tyson", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Neil_deGrasse_Tyson";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Yellow_Sign", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Yellow_Sign";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/OMG_Karen", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "OMG_Karen";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Question_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Question_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/OMG_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "OMG_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Crying_Because_Of_Cute", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Crying_Because_Of_Cute";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hide_Yo_Kids_Hide_Yo_Wife", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hide_Yo_Kids_Hide_Yo_Wife";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Actual_Advice_Mallard", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Actual_Advice_Mallard";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Patrick_Says", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Patrick_Says";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bear_Grylls", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bear_Grylls";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Weird_Stuff_I_Do_Potoo", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Weird_Stuff_I_Do_Potoo";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/First_World_Problems_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "First_World_Problems_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rick_and_Carl_3", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rick_and_Carl_3";
    },
    controlbox: function () {
      return "6_box";
    },
  });
});
app.get("/Hillary_Clinton_Cellphone", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hillary_Clinton_Cellphone";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Psy_Horse_Dance", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Psy_Horse_Dance";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Baby_Insanity_Wolf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Baby_Insanity_Wolf";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Kool_Kid_Klan", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Kool_Kid_Klan";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Michael_Phelps_Death_Stare", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Michael_Phelps_Death_Stare";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Because_Race_Car", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Because_Race_Car";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Eye_Of_Sauron", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Eye_Of_Sauron";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Star_Wars", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Star_Wars";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scrooge_McDuck", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scrooge_McDuck";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Penguin_Gang", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Penguin_Gang";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Internet_Guide", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Internet_Guide";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Monkey_Business", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Monkey_Business";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Yo_Mamas_So_Fat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Yo_Mamas_So_Fat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Smiling_Jesus", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Smiling_Jesus";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Life_Sucks", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Life_Sucks";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/No_I_Can't_Obama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "No_I_Can't_Obama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/That's_Just_Something_X_Say", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "That's_Just_Something_X_Say";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sergeant_Hartmann", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sergeant_Hartmann";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Oh_No", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Oh_No";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris_Phone", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_Phone";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bill_Murray_Golf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bill_Murray_Golf";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Krusty_Krab_Vs_Chum_Bucket_Blank", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Krusty_Krab_Vs_Chum_Bucket_Blank";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Money_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Money_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Yao_Ming", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Yao_Ming";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Samuel_Jackson_Glance", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Samuel_Jackson_Glance";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/We_Will_Rebuild", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "We_Will_Rebuild";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Most_Interesting_Cat_In_The_World", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Most_Interesting_Cat_In_The_World";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Steve_Harvey", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Steve_Harvey";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_The_Real_MVP_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_The_Real_MVP_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Most_Interesting_Cat_In_The_World", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Most_Interesting_Cat_In_The_World";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Team_Rocket", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Team_Rocket";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Take_A_Seat_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Take_A_Seat_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Advice_Yoda", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Advice_Yoda";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Beard_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Beard_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hipster_Barista", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hipster_Barista";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ron_Swanson", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ron_Swanson";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Challenge_Accepted_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Challenge_Accepted_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/If_You_Know_What_I_Mean_Bean", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "If_You_Know_What_I_Mean_Bean";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Stop_Cop", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Stop_Cop";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Facepalm_Bear", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Facepalm_Bear";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Morgan_Freeman_Good_Luck", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Morgan_Freeman_Good_Luck";
    },
    controlbox: function () {
      return "3_box";
    },
  });
});
app.get("/Barbosa_And_Sparrow", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Barbosa_And_Sparrow";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Joke_Eel", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Joke_Eel";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/TED", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "TED";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sad_Spiderman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sad_Spiderman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Today_Was_A_Good_Day", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Today_Was_A_Good_Day";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Barney_Stinson_Win", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Barney_Stinson_Win";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Quit_Hatin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Quit_Hatin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Advice_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Advice_Dog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Joker_Rainbow_Hands", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Joker_Rainbow_Hands";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/McKayla_Maroney_Not_Impressed", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "McKayla_Maroney_Not_Impressed";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Zombie_Overly_Attached_Girlfriend", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Zombie_Overly_Attached_Girlfriend";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/TSA_Douche", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "TSA_Douche";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Shouter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Shouter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scrooge_McDuck_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scrooge_McDuck_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Okay_Truck", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Okay_Truck";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pony_Shrugs", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pony_Shrugs";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Cute_Puppies", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cute_Puppies";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Batman_And_Superman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Batman_And_Superman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Super_Birthday_Squirrel", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Super_Birthday_Squirrel";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Forever_Alone", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Forever_Alone";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Blue_Background", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Blue_Background";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dat_Boi", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dat_Boi";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gotta_Go_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gotta_Go_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Rock_It_Doesn't_Matter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Rock_It_Doesn't_Matter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Corona", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Corona";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris_Finger", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_Finger";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Austin_Powers_Honestly", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Austin_Powers_Honestly";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Marvel_Civil_War_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Marvel_Civil_War_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/PTSD_Clarinet_Boy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "PTSD_Clarinet_Boy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chill_Out_Lemur", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chill_Out_Lemur";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Captain_Hindsight", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Captain_Hindsight";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Confused_Lebowski", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Confused_Lebowski";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/George_Washington", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "George_Washington";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Obama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Obama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Police_Officer_Testifying", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Police_Officer_Testifying";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Depressed_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Depressed_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Comic_Panel_2x1", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Comic_Panel_2x1";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dr_Evil", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dr_Evil";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ghetto_Jesus", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ghetto_Jesus";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/No_Bullshit_Business_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "No_Bullshit_Business_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/And_then_I_said_Obama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "And_then_I_said_Obama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Officer_Cartman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Officer_Cartman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Condescending_Goku", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Condescending_Goku";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Unwanted_House_Guest", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Unwanted_House_Guest";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Brian_Williams_Was_There", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Brian_Williams_Was_There";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Afraid_To_Ask_Andy_(Closeup)", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Afraid_To_Ask_Andy_(Closeup)";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Albert_Einstein_1", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Albert_Einstein_1";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Happy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Happy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gangnam_Style_PSY", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gangnam_Style_PSY";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Wrong_Neighboorhood_Cats", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Wrong_Neighboorhood_Cats";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hillary_Clinton", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hillary_Clinton";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dumb_Blonde", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dumb_Blonde";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sad_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sad_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Successful_Black_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Successful_Black_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Laundry_Viking", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Laundry_Viking";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Over_Educated_Problems", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Over_Educated_Problems";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sad_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sad_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Robots", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Robots";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Futurama_Zoidberg", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Futurama_Zoidberg";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Steve_Jobs", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Steve_Jobs";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Laughing_Goat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Laughing_Goat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Pun_Anna_Kendrick", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Pun_Anna_Kendrick";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You're_Too_Slow_Sonic", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You're_Too_Slow_Sonic";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Spiderman_Camera", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spiderman_Camera";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mother_Of_God", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mother_Of_God";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Koala", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Koala";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Multi_Doge", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Multi_Doge";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/High_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "High_Dog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Bride", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Bride";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/It's_True_All_of_It_Han_Solo", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "It's_True_All_of_It_Han_Solo";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Engineering_Professor", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Engineering_Professor";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Vladimir_Putin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Vladimir_Putin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rick_and_Carl_Longer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rick_and_Carl_Longer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scooby_Doo", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scooby_Doo";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pickup_Master", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pickup_Master";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ermahgerd_Beyonce", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ermahgerd_Beyonce";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_Don't_Say", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_Don't_Say";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Insanity_Puppy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Insanity_Puppy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sigmund_Freud", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sigmund_Freud";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Metal_Jesus", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Metal_Jesus";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Advice_God", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Advice_God";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bart_Simpson_Peeking", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bart_Simpson_Peeking";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Happy_Guy_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Happy_Guy_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Troll_Face_Colored", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Troll_Face_Colored";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hamtaro", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hamtaro";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Obama_No_Listen", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Obama_No_Listen";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Keep_Calm_And_Carry_On_Aqua", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Keep_Calm_And_Carry_On_Aqua";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Surprized_Vegeta", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Surprized_Vegeta";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blank_Colored_Background", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blank_Colored_Background";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Eighties_Teen", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Eighties_Teen";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Trailer_Park_Boys_Bubbles", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Trailer_Park_Boys_Bubbles";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/FFFFFFFUUUUUUUUUUUU", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "FFFFFFFUUUUUUUUUUUU";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Babushkas_On_Facebook", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Babushkas_On_Facebook";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Foul_Bachelor_Frog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Foul_Bachelor_Frog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Keep_Calm_And_Carry_On_Purple", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Keep_Calm_And_Carry_On_Purple";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/So_Much_Drama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "So_Much_Drama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Zuckerberg", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Zuckerberg";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hipster_Ariel", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hipster_Ariel";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/CASHWAG_Crew", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "CASHWAG_Crew";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scumbag_Minecraft", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scumbag_Minecraft";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Malicious_Advice_Mallard", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Malicious_Advice_Mallard";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Derp", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Derp";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Redneck_Randal", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Redneck_Randal";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bitch_Please", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bitch_Please";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Disappointed_Tyson", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Disappointed_Tyson";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Han_Solo", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Han_Solo";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Osabama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Osabama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Butthurt_Dweller", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Butthurt_Dweller";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Lazy_College_Senior", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Lazy_College_Senior";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Intelligent_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Intelligent_Dog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scumbag_Boss", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scumbag_Boss";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Small_Face_Romney", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Small_Face_Romney";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Surpised_Frodo", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Surpised_Frodo";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gasp_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gasp_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dexter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dexter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Big_Ego_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Big_Ego_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scumbag_Brain", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scumbag_Brain";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Net_Noob", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Net_Noob";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rick_Grimes", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rick_Grimes";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Spangles", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Spangles";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Relaxed_Office_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Relaxed_Office_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hot_Scale", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hot_Scale";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Kill_You_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Kill_You_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Family_Guy_Brian", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Family_Guy_Brian";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Bed", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Bed";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/True_Story", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "True_Story";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Advice_Doge", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Advice_Doge";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hoody_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hoody_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Original_Bad_Luck_Brian", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Original_Bad_Luck_Brian";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Frowning_Nun", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Frowning_Nun";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Toad", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Toad";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Not_Bad_Obama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Not_Bad_Obama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Cereal_Guy's_Daddy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cereal_Guy's_Daddy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Reverse", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Reverse";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Romney", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Romney";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Futurama_Leela", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Futurama_Leela";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bonobo_Lyfe", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bonobo_Lyfe";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Finn_The_Human", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Finn_The_Human";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Yuko_With_Gun", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Yuko_With_Gun";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris_Laughing", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_Laughing";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Serious_Xzibit", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Serious_Xzibit";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Zoidberg_Jesus", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Zoidberg_Jesus";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rebecca_Black", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rebecca_Black";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jammin_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jammin_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Google_Chrome", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Google_Chrome";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Cool_Story_Bro", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cool_Story_Bro";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_Get_An_X_And_You_Get_An_X", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_Get_An_X_And_You_Get_An_X";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Alarm_Clock", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Alarm_Clock";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/You_Get_An_X_And_You_Get_An_X", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "You_Get_An_X_And_You_Get_An_X";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Downvoting_Roman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Downvoting_Roman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fast_Furious_Johnny_Tran", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fast_Furious_Johnny_Tran";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fk_Yeah", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fk_Yeah";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Oblivious_Hot_Girl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Oblivious_Hot_Girl";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Socially_Awkward_Penguin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Socially_Awkward_Penguin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mega_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mega_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mr_T", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mr_T";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Problem_Is", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Problem_Is";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/No_Nappa_Its_A_Trick", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "No_Nappa_Its_A_Trick";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Bobs", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Bobs";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Paranoid_Parrot", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Paranoid_Parrot";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Confused_Mel_Gibson", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Confused_Mel_Gibson";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Father_Ted", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Father_Ted";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Predator", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Predator";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Homophobic_Seal", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Homophobic_Seal";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Computer_Horse", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Computer_Horse";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hercules_Hades", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hercules_Hades";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Close_Enough", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Close_Enough";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Simpsons_Grandpa", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Simpsons_Grandpa";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/1st_World_Canadian_Problems", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "1st_World_Canadian_Problems";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/2nd_Term_Obama", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "2nd_Term_Obama";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Suspicious_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Suspicious_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Dumbledore", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Dumbledore";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sassy_Iguana", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sassy_Iguana";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Error_404", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Error_404";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Okay_Guy_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Okay_Guy_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Subtle_Pickup_Liner", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Subtle_Pickup_Liner";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Vengeance_Dad", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Vengeance_Dad";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Brian_Griffin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Brian_Griffin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Invalid_Argument_Vader", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Invalid_Argument_Vader";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Okay_Guy_Rage_Face_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Okay_Guy_Rage_Face_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Woah_Kitty", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Woah_Kitty";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fifa_E_Call_Of_Duty", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fifa_E_Call_Of_Duty";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Tears_Of_Joy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Tears_Of_Joy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Onde", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Onde";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Anti_Joke_Chicken", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Anti_Joke_Chicken";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Courage_Wolf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Courage_Wolf";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris_Flex", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_Flex";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris_Flex", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_Flex";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Overjoyed", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Overjoyed";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mozart_Not_Sure", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mozart_Not_Sure";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Tech_Impaired_Duck", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Tech_Impaired_Duck";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Socially_Awesome_Penguin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Socially_Awesome_Penguin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Macklemore_Thrift_Store", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Macklemore_Thrift_Store";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Darth_Maul", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Darth_Maul";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/FRANGO", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "FRANGO";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Asian", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Asian";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Slick_Fry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Slick_Fry";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/V_For_Vendetta", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "V_For_Vendetta";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Men_Laughing", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Men_Laughing";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Romney_And_Ryan", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Romney_And_Ryan";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/He_Will_Never_Get_A_Girlfriend", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "He_Will_Never_Get_A_Girlfriend";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sudden_Disgust_Danny", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sudden_Disgust_Danny";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Questionable_Strategy_Kobe", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Questionable_Strategy_Kobe";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fim_De_Semana", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fim_De_Semana";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/McKayla_Maroney_Not_Impressed2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "McKayla_Maroney_Not_Impressed2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Efrain_Juarez", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Efrain_Juarez";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Unhappy_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Unhappy_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Kobe", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Kobe";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Blue_Futurama_Fry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Blue_Futurama_Fry";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sad_X_All_The_Y", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sad_X_All_The_Y";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fat_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fat_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Guy_Fawkes", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Guy_Fawkes";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Really_Evil_College_Teacher", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Really_Evil_College_Teacher";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Seriously_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Seriously_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Baby_Cry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Baby_Cry";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Slenderman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Slenderman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Evil_Otter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Evil_Otter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gandhi", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gandhi";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Merida_Brave", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Merida_Brave";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Crosseyed_Goku", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Crosseyed_Goku";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Will_Ferrell", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Will_Ferrell";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chester_The_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chester_The_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bill_Nye_The_Science_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bill_Nye_The_Science_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Foul_Bachelorette_Frog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Foul_Bachelorette_Frog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Birds_Pig", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Birds_Pig";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Frustrating_Mom", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Frustrating_Mom";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Big_Bird_And_Snuffy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Big_Bird_And_Snuffy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Will_Find_You_And_Kill_You", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Will_Find_You_And_Kill_You";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Romneys_Hindenberg", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Romneys_Hindenberg";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Depression_Dog", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Depression_Dog";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Frustrating_Mom", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Frustrating_Mom";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dolph_Ziggler_Sells", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dolph_Ziggler_Sells";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chavez", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chavez";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Success_Kid_Girl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Success_Kid_Girl";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Nailed_It", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Nailed_It";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ordinary_Muslim_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ordinary_Muslim_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/I_Lied_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "I_Lied_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuck_Norris_With_Guns", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuck_Norris_With_Guns";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Big_Bird", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Big_Bird";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Happy_Minaj", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Happy_Minaj";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Aw_Yeah_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Aw_Yeah_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Got_Room_For_One_More", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Got_Room_For_One_More";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dafuq_Did_I_Just_Read", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dafuq_Did_I_Just_Read";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bubba_And_Barack", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bubba_And_Barack";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Larry_The_Cable_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Larry_The_Cable_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dick_Cheney", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dick_Cheney";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Minegishi_Minami", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Minegishi_Minami";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Christmas", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Christmas";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/George_Bush", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "George_Bush";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hardworking_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hardworking_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Lame_Pun_Coon", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Lame_Pun_Coon";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pink_Escalade", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pink_Escalade";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Forever_Alone_Happy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Forever_Alone_Happy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dwight_Schrute_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dwight_Schrute_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sweaty_Concentrated_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sweaty_Concentrated_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Family_Guy_Peter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Family_Guy_Peter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Foal_Of_Mine", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Foal_Of_Mine";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hedonism_Bot", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hedonism_Bot";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Super_Kami_Guru_Allows_This", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Super_Kami_Guru_Allows_This";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Since_When_Were_You_Under_The_Impression", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Since_When_Were_You_Under_The_Impression";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Zombie_Bad_Luck_Brian", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Zombie_Bad_Luck_Brian";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Asshole_Ref", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Asshole_Ref";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jehovas_Witness_Squirrel", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jehovas_Witness_Squirrel";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Cereal_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Cereal_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/So_Many_Shirts", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "So_Many_Shirts";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Skype", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Skype";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pickup_Line_Panda", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pickup_Line_Panda";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Arrogant_Rich_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Arrogant_Rich_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/City_Bear", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "City_Bear";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Friend_Zone_Fiona", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Friend_Zone_Fiona";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Annoying_Childhood_Friend", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Annoying_Childhood_Friend";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Top_Hat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Top_Hat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fat_Val_Kilmer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fat_Val_Kilmer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Duck_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Duck_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Angry_Chicken_Boss", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Angry_Chicken_Boss";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Harry_Potter_Ok", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Harry_Potter_Ok";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Smug_Bear", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Smug_Bear";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/College_Freshman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "College_Freshman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bah_Humbug", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bah_Humbug";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/So_God_Made_A_Farmer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "So_God_Made_A_Farmer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Awkward_Olympics", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Awkward_Olympics";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Musically_Oblivious_8th_Grader", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Musically_Oblivious_8th_Grader";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Confession_Kid", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Confession_Kid";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Alan_Greenspan", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Alan_Greenspan";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ridiculously_Photogenic_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ridiculously_Photogenic_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Good_Guy_Pizza_Rolls", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Good_Guy_Pizza_Rolls";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/USA_Lifter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "USA_Lifter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Memeo", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Memeo";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Tennis_Defeat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Tennis_Defeat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Not_Okay_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Not_Okay_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Professor_Oak", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Professor_Oak";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sadly_I_Am_Only_An_Eel", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sadly_I_Am_Only_An_Eel";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Smirk_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Smirk_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dallas_Cowboys", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dallas_Cowboys";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Tom_Hardy_", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Tom_Hardy_";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Downcast_Dark_Souls", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Downcast_Dark_Souls";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rasta_Science_Teacher", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rasta_Science_Teacher";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Maroney_And_Obama_Not_Impressed", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Maroney_And_Obama_Not_Impressed";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Criana", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Criana";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/DoucheBag_DJ", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "DoucheBag_DJ";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Lil_Wayne", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Lil_Wayne";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Derpina", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Derpina";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Harmless_Scout_Leader", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Harmless_Scout_Leader";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Crazy_Dawg", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Crazy_Dawg";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Advice_Cat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Advice_Cat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Turkey", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Turkey";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Booty_Warrior", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Booty_Warrior";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Paul_Wonder_Years", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Paul_Wonder_Years";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Self_Loathing_Otter", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Self_Loathing_Otter";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Saw_Fulla", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Saw_Fulla";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Art_Student_Owl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Art_Student_Owl";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/BANE_AND_BRUCE", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "BANE_AND_BRUCE";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Photogenic_College_Football_Player", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Photogenic_College_Football_Player";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Nice_Guy_Loki", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Nice_Guy_Loki";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Admiral_Ackbar_Relationship_Expert", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Admiral_Ackbar_Relationship_Expert";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Beyonce_Superbowl_Yell", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Beyonce_Superbowl_Yell";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Headbanzer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Headbanzer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Too_Drunk_At_Party_Tina", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Too_Drunk_At_Party_Tina";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rob_In_The_Hood", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rob_In_The_Hood";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Shutup_Batty_Boy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Shutup_Batty_Boy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Table", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Table";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dancing_Trollmom", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dancing_Trollmom";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Big_Bird_And_Mitt_Romney", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Big_Bird_And_Mitt_Romney";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Critic", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Critic";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gladys_Falcon", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gladys_Falcon";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rich_Raven", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rich_Raven";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bill_OReilly", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bill_OReilly";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Dating_Site_Murderer", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Dating_Site_Murderer";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Original_I_Lied", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Original_I_Lied";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/South_Park_Craig", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "South_Park_Craig";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Oku_Manami", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Oku_Manami";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Innocent_Sasha", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Innocent_Sasha";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Overly_Attached_Father", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Overly_Attached_Father";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Does_Not_Believe", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Does_Not_Believe";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Simsimi", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Simsimi";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Edward_Elric_1", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Edward_Elric_1";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Idiotaco", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Idiotaco";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sarcastic_Anthony", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sarcastic_Anthony";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gaga_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gaga_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mitch_McConnell", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mitch_McConnell";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Modern_Warfare_3", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Modern_Warfare_3";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rarity", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rarity";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scumbag_Daylight_Savings_Time", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scumbag_Daylight_Savings_Time";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Deadpool_Pick_Up_Lines", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Deadpool_Pick_Up_Lines";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Little_Romney", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Little_Romney";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/The_Most_Interesting_Justin_Bieber", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "The_Most_Interesting_Justin_Bieber";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Idiot_Nerd_Girl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Idiot_Nerd_Girl";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Beyonce_Knowles_Superbowl", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Beyonce_Knowles_Superbowl";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Chuckchuckchuck", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Chuckchuckchuck";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Surprised_CatMan", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Surprised_CatMan";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Happy_Minaj_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Happy_Minaj_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fabulous_Frank_And_His_Snake", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fabulous_Frank_And_His_Snake";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/So_I_Got_That_Goin_For_Me_Which_Is_Nice_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "So_I_Got_That_Goin_For_Me_Which_Is_Nice_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Stoner_PhD", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Stoner_PhD";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Britney_Spears", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Britney_Spears";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Im_Curious_Nappa", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Im_Curious_Nappa";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bothered_Bond", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bothered_Bond";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Lethal_Weapon_Danny_Glover", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Lethal_Weapon_Danny_Glover";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Determined_Guy_Rage_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Determined_Guy_Rage_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gangster_Baby", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gangster_Baby";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Selfish_Ozzy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Selfish_Ozzy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Wife_Worse_Mom", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Wife_Worse_Mom";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Obama_Romney_Pointing", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Obama_Romney_Pointing";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scumbag_Redditor", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scumbag_Redditor";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Solemn_Lumberjack", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Solemn_Lumberjack";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Yakuza", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Yakuza";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/CURLEY", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "CURLEY";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Nabilah_Jkt48", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Nabilah_Jkt48";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Crazy_Hispanic_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Crazy_Hispanic_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Sheltering_Suburban_Mom", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Sheltering_Suburban_Mom";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hipster_Kitty", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hipster_Kitty";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Zorg", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Zorg";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Tough_Guy_Wanna_Be", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Tough_Guy_Wanna_Be";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Obama_Cowboy_Hat", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Obama_Cowboy_Hat";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Lewandowski_E_Reus", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Lewandowski_E_Reus";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jon_Stewart_Skeptical", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jon_Stewart_Skeptical";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Halloween", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Halloween";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Photogenic_Scene_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Photogenic_Scene_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Felix_Baumgartner_Lulz", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Felix_Baumgartner_Lulz";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Viking_Dudes", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Viking_Dudes";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Doug", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Doug";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jerkoff_Javert", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jerkoff_Javert";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Forever_Alone_Christmas", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Forever_Alone_Christmas";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Beyonce_Knowles_Superbowl_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Beyonce_Knowles_Superbowl_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gangnam_Style2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gangnam_Style2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hypocritical_Islam_Terrorist", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hypocritical_Islam_Terrorist";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Rena_Matsui", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Rena_Matsui";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Patrick_Henry", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Patrick_Henry";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bad_Luck_Hannah", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bad_Luck_Hannah";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Scene_Wolf", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Scene_Wolf";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jersey_Santa", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jersey_Santa";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mad_Moxxi", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mad_Moxxi";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hawkward", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hawkward";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Religious_Couple", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Religious_Couple";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jesus_Talking_To_Cool_Dude", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jesus_Talking_To_Cool_Dude";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Im_Fabulous_Adam", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Im_Fabulous_Adam";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Barack_And_Kumar_2013", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Barack_And_Kumar_2013";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Oh_My_God_Orange", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Oh_My_God_Orange";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Young_And_Reckless", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Young_And_Reckless";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Mistletoe", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Mistletoe";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat_Sky", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat_Sky";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Pickup_Professor", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Pickup_Professor";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Grumpy_Cat's_Father", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Grumpy_Cat's_Father";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Empty_Red_And_Black", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Empty_Red_And_Black";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Herm_Edwards", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Herm_Edwards";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Brian_Williams_Was_There_2", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Brian_Williams_Was_There_2";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Speechless_Colbert_Face", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Speechless_Colbert_Face";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Fernando_Litre", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Fernando_Litre";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Gangnam_Style", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Gangnam_Style";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Brian_Burke_On_The_Phone", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Brian_Burke_On_The_Phone";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Muschamp", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Muschamp";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Brian_Williams_Was_There_3", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Brian_Williams_Was_There_3";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Contradictory_Chris", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Contradictory_Chris";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Ben_Barba_Pointing", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Ben_Barba_Pointing";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Kim_Jong_Il_Y_U_No", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Kim_Jong_Il_Y_U_No";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/House_Bunny", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "House_Bunny";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Paul_Ryan", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Paul_Ryan";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Manning_Broncos", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Manning_Broncos";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Wrong_Number_Rita", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Wrong_Number_Rita";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Jim_Lehrer_The_Man", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Jim_Lehrer_The_Man";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Casper", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Casper";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Portuguese", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Portuguese";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Mr_Black_Knows_Everything", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Mr_Black_Knows_Everything";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Crazy_Girlfriend_Praying_Mantis", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Crazy_Girlfriend_Praying_Mantis";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Advice_Peeta", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Advice_Peeta";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hora_Extra", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hora_Extra";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Overly_Suave_IT_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Overly_Suave_IT_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Vali_Corleone", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Vali_Corleone";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Brian_Wilson_Vs_ZZ_Top", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Brian_Wilson_Vs_ZZ_Top";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Samuel_L_Jackson", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Samuel_L_Jackson";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Superior_Wadsworth", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Superior_Wadsworth";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Hot_Caleb", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Hot_Caleb";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Misunderstood_Mitch", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Misunderstood_Mitch";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Are_Your_Parents_Brother_And_Sister", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Are_Your_Parents_Brother_And_Sister";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Family_Tech_Support_Guy", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Family_Tech_Support_Guy";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Skeptical_Swardson", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Skeptical_Swardson";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Legal_Bill_Murray", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Legal_Bill_Murray";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Bebo", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Bebo";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Torreshit", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Torreshit";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Perturbed_Portman", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Perturbed_Portman";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Good_Guy_Socially_Awkward_Penguin", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Good_Guy_Socially_Awkward_Penguin";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Baron_Creater", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Baron_Creater";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
app.get("/Helpful_Tyler_Durden", (req, res) => {
  res.render("index", {
    memebox: function () {
      return "Helpful_Tyler_Durden";
    },
    controlbox: function () {
      return "2_box";
    },
  });
});
module.exports = app;

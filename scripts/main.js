import { leaderListComponent } from "./australia/leaders/leaderList.js";
import LandmarkListComponent from "./australia/landmarks/landmarkList.js";
import CityListComponent from "./australia/cities/cityList.js";
import initializeDetailButtonEvents from "./main_dialog.js";
// import borderColorChange from './dialogue.js'

// borderColorChange()
CityListComponent();
LandmarkListComponent();
leaderListComponent();
initializeDetailButtonEvents();

gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.GDFallMarkerObjects1_1final = [];

gdjs.GameSceneCode.GDFeatherRavenObjects1_1final = [];

gdjs.GameSceneCode.GDPoisonObjects1_1final = [];

gdjs.GameSceneCode.GDphantomObjects1_1final = [];

gdjs.GameSceneCode.GDFeatherRavenObjects1= [];
gdjs.GameSceneCode.GDFeatherRavenObjects2= [];
gdjs.GameSceneCode.GDFeatherRavenObjects3= [];
gdjs.GameSceneCode.GDSkullObjects1= [];
gdjs.GameSceneCode.GDSkullObjects2= [];
gdjs.GameSceneCode.GDSkullObjects3= [];
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1= [];
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects2= [];
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects3= [];
gdjs.GameSceneCode.GDBackgroundObjects1= [];
gdjs.GameSceneCode.GDBackgroundObjects2= [];
gdjs.GameSceneCode.GDBackgroundObjects3= [];
gdjs.GameSceneCode.GDFallMarkerObjects1= [];
gdjs.GameSceneCode.GDFallMarkerObjects2= [];
gdjs.GameSceneCode.GDFallMarkerObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects3= [];
gdjs.GameSceneCode.GDPoisonObjects1= [];
gdjs.GameSceneCode.GDPoisonObjects2= [];
gdjs.GameSceneCode.GDPoisonObjects3= [];
gdjs.GameSceneCode.GDphantomObjects1= [];
gdjs.GameSceneCode.GDphantomObjects2= [];
gdjs.GameSceneCode.GDphantomObjects3= [];
gdjs.GameSceneCode.GDGhostObjects1= [];
gdjs.GameSceneCode.GDGhostObjects2= [];
gdjs.GameSceneCode.GDGhostObjects3= [];
gdjs.GameSceneCode.GDArrowObjects1= [];
gdjs.GameSceneCode.GDArrowObjects2= [];
gdjs.GameSceneCode.GDArrowObjects3= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects1= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects2= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects3= [];
gdjs.GameSceneCode.GDAButtonObjects1= [];
gdjs.GameSceneCode.GDAButtonObjects2= [];
gdjs.GameSceneCode.GDAButtonObjects3= [];
gdjs.GameSceneCode.GDScoreObjects1= [];
gdjs.GameSceneCode.GDScoreObjects2= [];
gdjs.GameSceneCode.GDScoreObjects3= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.GameSceneCode.GDAButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.GameSceneCode.GDFlatLightJoystickObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFlatLightJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDAButtonObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects2Objects = Hashtable.newFrom({"FeatherRaven": gdjs.GameSceneCode.GDFeatherRavenObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGhostObjects2Objects = Hashtable.newFrom({"Ghost": gdjs.GameSceneCode.GDGhostObjects2});
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.GameSceneCode.GDGhostObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGhostObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGhostObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameSceneCode.GDScoreObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.randomFloatInRange(0.025, 0.05));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PitchScaling");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ding", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - 0.1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDGhostObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGhostObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PitchScaling") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects2Objects = Hashtable.newFrom({"FeatherRaven": gdjs.GameSceneCode.GDFeatherRavenObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDphantomObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameSceneCode.GDPoisonObjects2, "phantom": gdjs.GameSceneCode.GDphantomObjects2});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.GameSceneCode.GDFallMarkerObjects1.length = 0;

gdjs.GameSceneCode.GDFeatherRavenObjects1.length = 0;

gdjs.GameSceneCode.GDPoisonObjects1.length = 0;

gdjs.GameSceneCode.GDphantomObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameSceneCode.GDFallMarkerObjects1_1final.length = 0;
gdjs.GameSceneCode.GDFeatherRavenObjects1_1final.length = 0;
gdjs.GameSceneCode.GDPoisonObjects1_1final.length = 0;
gdjs.GameSceneCode.GDphantomObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameSceneCode.GDFallMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects2);
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDFeatherRavenObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDFeatherRavenObjects2[i].getY() > (( gdjs.GameSceneCode.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDFeatherRavenObjects2[k] = gdjs.GameSceneCode.GDFeatherRavenObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDFeatherRavenObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDFallMarkerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDFallMarkerObjects1_1final.indexOf(gdjs.GameSceneCode.GDFallMarkerObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDFallMarkerObjects1_1final.push(gdjs.GameSceneCode.GDFallMarkerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDFeatherRavenObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDFeatherRavenObjects1_1final.indexOf(gdjs.GameSceneCode.GDFeatherRavenObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDFeatherRavenObjects1_1final.push(gdjs.GameSceneCode.GDFeatherRavenObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Poison"), gdjs.GameSceneCode.GDPoisonObjects2);
gdjs.copyArray(runtimeScene.getObjects("phantom"), gdjs.GameSceneCode.GDphantomObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDphantomObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDFeatherRavenObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDFeatherRavenObjects1_1final.indexOf(gdjs.GameSceneCode.GDFeatherRavenObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDFeatherRavenObjects1_1final.push(gdjs.GameSceneCode.GDFeatherRavenObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDPoisonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDPoisonObjects1_1final.indexOf(gdjs.GameSceneCode.GDPoisonObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDPoisonObjects1_1final.push(gdjs.GameSceneCode.GDPoisonObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameSceneCode.GDphantomObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDphantomObjects1_1final.indexOf(gdjs.GameSceneCode.GDphantomObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDphantomObjects1_1final.push(gdjs.GameSceneCode.GDphantomObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameSceneCode.GDFallMarkerObjects1_1final, gdjs.GameSceneCode.GDFallMarkerObjects1);
gdjs.copyArray(gdjs.GameSceneCode.GDFeatherRavenObjects1_1final, gdjs.GameSceneCode.GDFeatherRavenObjects1);
gdjs.copyArray(gdjs.GameSceneCode.GDPoisonObjects1_1final, gdjs.GameSceneCode.GDPoisonObjects1);
gdjs.copyArray(gdjs.GameSceneCode.GDphantomObjects1_1final, gdjs.GameSceneCode.GDphantomObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 75, 0.8);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects1Objects = Hashtable.newFrom({"FeatherRaven": gdjs.GameSceneCode.GDFeatherRavenObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSkullObjects1Objects = Hashtable.newFrom({"Skull": gdjs.GameSceneCode.GDSkullObjects1});
gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skull"), gdjs.GameSceneCode.GDSkullObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSkullObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12548492);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "WinGame", false, 50, 1);
}}

}


};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12550028);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.GameSceneCode.GDAButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDAButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDAButtonObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDAButtonObjects1[k] = gdjs.GameSceneCode.GDAButtonObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDAButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDFeatherRavenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFeatherRavenObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Left"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Right"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1[0].getAABBRight()), (( gdjs.GameSceneCode.GDFeatherRavenObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFeatherRavenObjects1[0].getPointY("")) - 500, (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1[0].getAABBLeft()), (( gdjs.GameSceneCode.GDFeatherRavenObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFeatherRavenObjects1[0].getPointY("")) + 500, "", 0);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects2Objects = Hashtable.newFrom({"FeatherRaven": gdjs.GameSceneCode.GDFeatherRavenObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDphantomObjects2Objects = Hashtable.newFrom({"phantom": gdjs.GameSceneCode.GDphantomObjects2});
gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects2);
gdjs.copyArray(runtimeScene.getObjects("phantom"), gdjs.GameSceneCode.GDphantomObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDFeatherRavenObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDphantomObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDphantomObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDphantomObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDphantomObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDphantomObjects2[k] = gdjs.GameSceneCode.GDphantomObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDphantomObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDphantomObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDphantomObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDphantomObjects2[i].setVariableBoolean(gdjs.GameSceneCode.GDphantomObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("phantom"), gdjs.GameSceneCode.GDphantomObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDphantomObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDphantomObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDphantomObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDphantomObjects2[k] = gdjs.GameSceneCode.GDphantomObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDphantomObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDphantomObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDphantomObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDphantomObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameSceneCode.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("phantom"), gdjs.GameSceneCode.GDphantomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDphantomObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDphantomObjects1[i].getY() > (( gdjs.GameSceneCode.GDFallMarkerObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFallMarkerObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDphantomObjects1[k] = gdjs.GameSceneCode.GDphantomObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDphantomObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDphantomObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDphantomObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDphantomObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameSceneCode.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("FeatherRaven"), gdjs.GameSceneCode.GDFeatherRavenObjects1);
gdjs.copyArray(runtimeScene.getObjects("StarryBackgroundShadows2"), gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1.length !== 0 ? gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1[0] : null), true, "Background", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameSceneCode.GDFeatherRavenObjects1.length !== 0 ? gdjs.GameSceneCode.GDFeatherRavenObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameSceneCode.GDFeatherRavenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFeatherRavenObjects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFallMarkerObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFallMarkerObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StarryBackgroundShadows2"), gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 50);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 3);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 3);
}
}}

}


{


gdjs.GameSceneCode.eventsList1(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList2(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList5(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList6(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList7(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDFeatherRavenObjects1.length = 0;
gdjs.GameSceneCode.GDFeatherRavenObjects2.length = 0;
gdjs.GameSceneCode.GDFeatherRavenObjects3.length = 0;
gdjs.GameSceneCode.GDSkullObjects1.length = 0;
gdjs.GameSceneCode.GDSkullObjects2.length = 0;
gdjs.GameSceneCode.GDSkullObjects3.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects2.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects3.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects1.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects2.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.GameSceneCode.GDPoisonObjects1.length = 0;
gdjs.GameSceneCode.GDPoisonObjects2.length = 0;
gdjs.GameSceneCode.GDPoisonObjects3.length = 0;
gdjs.GameSceneCode.GDphantomObjects1.length = 0;
gdjs.GameSceneCode.GDphantomObjects2.length = 0;
gdjs.GameSceneCode.GDphantomObjects3.length = 0;
gdjs.GameSceneCode.GDGhostObjects1.length = 0;
gdjs.GameSceneCode.GDGhostObjects2.length = 0;
gdjs.GameSceneCode.GDGhostObjects3.length = 0;
gdjs.GameSceneCode.GDArrowObjects1.length = 0;
gdjs.GameSceneCode.GDArrowObjects2.length = 0;
gdjs.GameSceneCode.GDArrowObjects3.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDAButtonObjects1.length = 0;
gdjs.GameSceneCode.GDAButtonObjects2.length = 0;
gdjs.GameSceneCode.GDAButtonObjects3.length = 0;
gdjs.GameSceneCode.GDScoreObjects1.length = 0;
gdjs.GameSceneCode.GDScoreObjects2.length = 0;
gdjs.GameSceneCode.GDScoreObjects3.length = 0;

gdjs.GameSceneCode.eventsList8(runtimeScene);
gdjs.GameSceneCode.GDFeatherRavenObjects1.length = 0;
gdjs.GameSceneCode.GDFeatherRavenObjects2.length = 0;
gdjs.GameSceneCode.GDFeatherRavenObjects3.length = 0;
gdjs.GameSceneCode.GDSkullObjects1.length = 0;
gdjs.GameSceneCode.GDSkullObjects2.length = 0;
gdjs.GameSceneCode.GDSkullObjects3.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects1.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects2.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundShadows2Objects3.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects1.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects2.length = 0;
gdjs.GameSceneCode.GDFallMarkerObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.GameSceneCode.GDPoisonObjects1.length = 0;
gdjs.GameSceneCode.GDPoisonObjects2.length = 0;
gdjs.GameSceneCode.GDPoisonObjects3.length = 0;
gdjs.GameSceneCode.GDphantomObjects1.length = 0;
gdjs.GameSceneCode.GDphantomObjects2.length = 0;
gdjs.GameSceneCode.GDphantomObjects3.length = 0;
gdjs.GameSceneCode.GDGhostObjects1.length = 0;
gdjs.GameSceneCode.GDGhostObjects2.length = 0;
gdjs.GameSceneCode.GDGhostObjects3.length = 0;
gdjs.GameSceneCode.GDArrowObjects1.length = 0;
gdjs.GameSceneCode.GDArrowObjects2.length = 0;
gdjs.GameSceneCode.GDArrowObjects3.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDAButtonObjects1.length = 0;
gdjs.GameSceneCode.GDAButtonObjects2.length = 0;
gdjs.GameSceneCode.GDAButtonObjects3.length = 0;
gdjs.GameSceneCode.GDScoreObjects1.length = 0;
gdjs.GameSceneCode.GDScoreObjects2.length = 0;
gdjs.GameSceneCode.GDScoreObjects3.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;

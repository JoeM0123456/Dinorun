gdjs.startjmCode = {};
gdjs.startjmCode.GDGrassAndTreeBackgroundJMObjects1= [];
gdjs.startjmCode.GDGrassAndTreeBackgroundJMObjects2= [];
gdjs.startjmCode.GDGreenButtonjmObjects1= [];
gdjs.startjmCode.GDGreenButtonjmObjects2= [];
gdjs.startjmCode.GDTitleJMObjects1= [];
gdjs.startjmCode.GDTitleJMObjects2= [];
gdjs.startjmCode.GDeggsJmObjects1= [];
gdjs.startjmCode.GDeggsJmObjects2= [];
gdjs.startjmCode.GDDinoJmObjects1= [];
gdjs.startjmCode.GDDinoJmObjects2= [];
gdjs.startjmCode.GDeggsJm3Objects1= [];
gdjs.startjmCode.GDeggsJm3Objects2= [];
gdjs.startjmCode.GDGreenBackgroundObjects1= [];
gdjs.startjmCode.GDGreenBackgroundObjects2= [];
gdjs.startjmCode.GDIndustrialPlatformObjects1= [];
gdjs.startjmCode.GDIndustrialPlatformObjects2= [];
gdjs.startjmCode.GDIndustrialPlatform2Objects1= [];
gdjs.startjmCode.GDIndustrialPlatform2Objects2= [];
gdjs.startjmCode.GDIndustrialBlock4Objects1= [];
gdjs.startjmCode.GDIndustrialBlock4Objects2= [];
gdjs.startjmCode.GDSmallPlatformObjects1= [];
gdjs.startjmCode.GDSmallPlatformObjects2= [];
gdjs.startjmCode.GDIndustrialLadderObjects1= [];
gdjs.startjmCode.GDIndustrialLadderObjects2= [];
gdjs.startjmCode.GDGreenSubstanceCeilingObjects1= [];
gdjs.startjmCode.GDGreenSubstanceCeilingObjects2= [];
gdjs.startjmCode.GDGreenBlockObjects1= [];
gdjs.startjmCode.GDGreenBlockObjects2= [];
gdjs.startjmCode.GDMonitorObjects1= [];
gdjs.startjmCode.GDMonitorObjects2= [];
gdjs.startjmCode.GDSecurityFenceObjects1= [];
gdjs.startjmCode.GDSecurityFenceObjects2= [];
gdjs.startjmCode.GDOrangeButtonOnSocleObjects1= [];
gdjs.startjmCode.GDOrangeButtonOnSocleObjects2= [];
gdjs.startjmCode.GDscientistjmObjects1= [];
gdjs.startjmCode.GDscientistjmObjects2= [];
gdjs.startjmCode.GDTracyObjects1= [];
gdjs.startjmCode.GDTracyObjects2= [];
gdjs.startjmCode.GDDinoVita9000Objects1= [];
gdjs.startjmCode.GDDinoVita9000Objects2= [];
gdjs.startjmCode.GDGreenDoorTopObjects1= [];
gdjs.startjmCode.GDGreenDoorTopObjects2= [];
gdjs.startjmCode.GDYellowButtonOnSocleObjects1= [];
gdjs.startjmCode.GDYellowButtonOnSocleObjects2= [];
gdjs.startjmCode.GDDinoVitajmObjects1= [];
gdjs.startjmCode.GDDinoVitajmObjects2= [];
gdjs.startjmCode.GDYellowButtonOnSocle2Objects1= [];
gdjs.startjmCode.GDYellowButtonOnSocle2Objects2= [];
gdjs.startjmCode.GDTracyjmObjects1= [];
gdjs.startjmCode.GDTracyjmObjects2= [];
gdjs.startjmCode.GDDinoVita2Objects1= [];
gdjs.startjmCode.GDDinoVita2Objects2= [];
gdjs.startjmCode.GDHealthBarjmObjects1= [];
gdjs.startjmCode.GDHealthBarjmObjects2= [];
gdjs.startjmCode.GDHealthBarBoxjmObjects1= [];
gdjs.startjmCode.GDHealthBarBoxjmObjects2= [];
gdjs.startjmCode.GDeggsMdObjects1= [];
gdjs.startjmCode.GDeggsMdObjects2= [];
gdjs.startjmCode.GDScoreObjects1= [];
gdjs.startjmCode.GDScoreObjects2= [];
gdjs.startjmCode.GDDinoVita3Objects1= [];
gdjs.startjmCode.GDDinoVita3Objects2= [];
gdjs.startjmCode.GDDinoVitaObjects1= [];
gdjs.startjmCode.GDDinoVitaObjects2= [];
gdjs.startjmCode.GDGreenBlock3Objects1= [];
gdjs.startjmCode.GDGreenBlock3Objects2= [];
gdjs.startjmCode.GDFlagGreenObjects1= [];
gdjs.startjmCode.GDFlagGreenObjects2= [];
gdjs.startjmCode.GDHealthKitObjects1= [];
gdjs.startjmCode.GDHealthKitObjects2= [];


gdjs.startjmCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("eggsJm"), gdjs.startjmCode.GDeggsJmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startjmCode.GDeggsJmObjects1.length;i<l;++i) {
    if ( gdjs.startjmCode.GDeggsJmObjects1[i].getBehavior("Animation").getAnimationName() == "move" ) {
        isConditionTrue_0 = true;
        gdjs.startjmCode.GDeggsJmObjects1[k] = gdjs.startjmCode.GDeggsJmObjects1[i];
        ++k;
    }
}
gdjs.startjmCode.GDeggsJmObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoJm"), gdjs.startjmCode.GDDinoJmObjects1);
{for(var i = 0, len = gdjs.startjmCode.GDDinoJmObjects1.length ;i < len;++i) {
    gdjs.startjmCode.GDDinoJmObjects1[i].getBehavior("Animation").setAnimationName("Sneak");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "828e82cacf7edb5d14f490de6fca0e8a28c7531718f1d3b6064e82717e854af4_48 - Helgi the Hero Bold (Sega-style FM Synth Remix).aac", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonjm"), gdjs.startjmCode.GDGreenButtonjmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startjmCode.GDGreenButtonjmObjects1.length;i<l;++i) {
    if ( gdjs.startjmCode.GDGreenButtonjmObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startjmCode.GDGreenButtonjmObjects1[k] = gdjs.startjmCode.GDGreenButtonjmObjects1[i];
        ++k;
    }
}
gdjs.startjmCode.GDGreenButtonjmObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intojm", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.startjmCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startjmCode.GDGrassAndTreeBackgroundJMObjects1.length = 0;
gdjs.startjmCode.GDGrassAndTreeBackgroundJMObjects2.length = 0;
gdjs.startjmCode.GDGreenButtonjmObjects1.length = 0;
gdjs.startjmCode.GDGreenButtonjmObjects2.length = 0;
gdjs.startjmCode.GDTitleJMObjects1.length = 0;
gdjs.startjmCode.GDTitleJMObjects2.length = 0;
gdjs.startjmCode.GDeggsJmObjects1.length = 0;
gdjs.startjmCode.GDeggsJmObjects2.length = 0;
gdjs.startjmCode.GDDinoJmObjects1.length = 0;
gdjs.startjmCode.GDDinoJmObjects2.length = 0;
gdjs.startjmCode.GDeggsJm3Objects1.length = 0;
gdjs.startjmCode.GDeggsJm3Objects2.length = 0;
gdjs.startjmCode.GDGreenBackgroundObjects1.length = 0;
gdjs.startjmCode.GDGreenBackgroundObjects2.length = 0;
gdjs.startjmCode.GDIndustrialPlatformObjects1.length = 0;
gdjs.startjmCode.GDIndustrialPlatformObjects2.length = 0;
gdjs.startjmCode.GDIndustrialPlatform2Objects1.length = 0;
gdjs.startjmCode.GDIndustrialPlatform2Objects2.length = 0;
gdjs.startjmCode.GDIndustrialBlock4Objects1.length = 0;
gdjs.startjmCode.GDIndustrialBlock4Objects2.length = 0;
gdjs.startjmCode.GDSmallPlatformObjects1.length = 0;
gdjs.startjmCode.GDSmallPlatformObjects2.length = 0;
gdjs.startjmCode.GDIndustrialLadderObjects1.length = 0;
gdjs.startjmCode.GDIndustrialLadderObjects2.length = 0;
gdjs.startjmCode.GDGreenSubstanceCeilingObjects1.length = 0;
gdjs.startjmCode.GDGreenSubstanceCeilingObjects2.length = 0;
gdjs.startjmCode.GDGreenBlockObjects1.length = 0;
gdjs.startjmCode.GDGreenBlockObjects2.length = 0;
gdjs.startjmCode.GDMonitorObjects1.length = 0;
gdjs.startjmCode.GDMonitorObjects2.length = 0;
gdjs.startjmCode.GDSecurityFenceObjects1.length = 0;
gdjs.startjmCode.GDSecurityFenceObjects2.length = 0;
gdjs.startjmCode.GDOrangeButtonOnSocleObjects1.length = 0;
gdjs.startjmCode.GDOrangeButtonOnSocleObjects2.length = 0;
gdjs.startjmCode.GDscientistjmObjects1.length = 0;
gdjs.startjmCode.GDscientistjmObjects2.length = 0;
gdjs.startjmCode.GDTracyObjects1.length = 0;
gdjs.startjmCode.GDTracyObjects2.length = 0;
gdjs.startjmCode.GDDinoVita9000Objects1.length = 0;
gdjs.startjmCode.GDDinoVita9000Objects2.length = 0;
gdjs.startjmCode.GDGreenDoorTopObjects1.length = 0;
gdjs.startjmCode.GDGreenDoorTopObjects2.length = 0;
gdjs.startjmCode.GDYellowButtonOnSocleObjects1.length = 0;
gdjs.startjmCode.GDYellowButtonOnSocleObjects2.length = 0;
gdjs.startjmCode.GDDinoVitajmObjects1.length = 0;
gdjs.startjmCode.GDDinoVitajmObjects2.length = 0;
gdjs.startjmCode.GDYellowButtonOnSocle2Objects1.length = 0;
gdjs.startjmCode.GDYellowButtonOnSocle2Objects2.length = 0;
gdjs.startjmCode.GDTracyjmObjects1.length = 0;
gdjs.startjmCode.GDTracyjmObjects2.length = 0;
gdjs.startjmCode.GDDinoVita2Objects1.length = 0;
gdjs.startjmCode.GDDinoVita2Objects2.length = 0;
gdjs.startjmCode.GDHealthBarjmObjects1.length = 0;
gdjs.startjmCode.GDHealthBarjmObjects2.length = 0;
gdjs.startjmCode.GDHealthBarBoxjmObjects1.length = 0;
gdjs.startjmCode.GDHealthBarBoxjmObjects2.length = 0;
gdjs.startjmCode.GDeggsMdObjects1.length = 0;
gdjs.startjmCode.GDeggsMdObjects2.length = 0;
gdjs.startjmCode.GDScoreObjects1.length = 0;
gdjs.startjmCode.GDScoreObjects2.length = 0;
gdjs.startjmCode.GDDinoVita3Objects1.length = 0;
gdjs.startjmCode.GDDinoVita3Objects2.length = 0;
gdjs.startjmCode.GDDinoVitaObjects1.length = 0;
gdjs.startjmCode.GDDinoVitaObjects2.length = 0;
gdjs.startjmCode.GDGreenBlock3Objects1.length = 0;
gdjs.startjmCode.GDGreenBlock3Objects2.length = 0;
gdjs.startjmCode.GDFlagGreenObjects1.length = 0;
gdjs.startjmCode.GDFlagGreenObjects2.length = 0;
gdjs.startjmCode.GDHealthKitObjects1.length = 0;
gdjs.startjmCode.GDHealthKitObjects2.length = 0;

gdjs.startjmCode.eventsList0(runtimeScene);

return;

}

gdjs['startjmCode'] = gdjs.startjmCode;

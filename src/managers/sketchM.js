// |                                           SketchSet                                             |   
// |                                                                                                 |                
// | |                         SketchSwitch                          | |      SketchSwitch        |  |   
// | |                                                               | |                          |  |  
// | | |          SketchGroup           |   |      SketchGroup     | | | |      SketchGroup    |  |  |                
// | | |                                |   |                      | | | |                     |  |  |               
// | | |  |Sketch|  |Sketch|  |Sketch|  |   |  |Sketch|  |Sketch|  | | | |  |Sketch|  |Sketch| |  |  |              

// A Sketch correspond to a single p5 sketch
// A SketchGroup is a group of sketches where any number of Sketches are running
// A SketchSwitch is a a group of SketchGroups where only 1 SketchGroup can be running

var sketchSet = {
    switches: [
        // {
        //     id: "PAGES",
        //     groups: [
        //         {
        //             id: "LANDING",
        //             sketches: []
        //         },
        //         {
        //             id: "ABOUTME",
        //             sketches: []
        //         },
        //     ]
        // }
    ]
};
var sketchMAddSketch = (switchID, groupID, sketch) => {
    const sketchSwitch = sketchSet.find(sw => sw.id === switchID);
    if (sketchSwitch === undefined) {
        sketchSet.switches.push({
            id: switchID,
            groups: [{
                id: groupID,
                sketches: [sketch]
            }]
        })
    }
    else {
        const sketchGroup = sketchSwitch.find(sg => sg.id === groupID);
        if (sketchGroup === undefined) {
            sketchSwitch.groups.push({
                id: groupID,
                sketches: [sketch]
            })
        }
        else {
            sketchGroup.push(sketch);
        }
    }
}

console.log("sketchM init");

var sketchMGroupRefresh = (switchID, groupID) => {
    const sketchSwitch = sketchSet.find(sw => sw.id === switchID);
    if (sketchSwitch === undefined)
        return;
    // throw new Error(`sketchMGroupRefresh: switchID ${switchID} does not exist (with groupID ${groupID})`);
    const sketchGroup = sketchSwitch.find(sg => sg.id === groupID);
    if (sketchGroup === undefined)
        return;
    // throw new Error(`sketchMGroupRefresh: groupID ${groupID} does not exist (with switchID ${switchID})`);
    for (var sketch of sketchGroup.sketches) {
        sketch.refresh();
    }
}
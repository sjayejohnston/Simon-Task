/************************** 
 * Simon_Task_Simple *
 **************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'simon_task_simple';  // from the Builder filename that created this script
let expInfo = {
    'session': '001',
    'participant': '',
    'counterbalance': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(prac_instructionsRoutineBegin());
flowScheduler.add(prac_instructionsRoutineEachFrame());
flowScheduler.add(prac_instructionsRoutineEnd());
const practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceLoopBegin(practiceLoopScheduler));
flowScheduler.add(practiceLoopScheduler);
flowScheduler.add(practiceLoopEnd);



flowScheduler.add(trial_instructionsRoutineBegin());
flowScheduler.add(trial_instructionsRoutineEachFrame());
flowScheduler.add(trial_instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var prac_instructionsClock;
var text_norm;
var key_instruct;
var simon_setupClock;
var simon_trialClock;
var fixation_cross;
var left_stim;
var right_stim;
var ITI;
var resp;
var trial_instructionsClock;
var text_norm_2;
var key_instruct_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "prac_instructions"
  prac_instructionsClock = new util.Clock();
  text_norm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm',
    text: "Basic Simon Task\n\nOnscren you will seee either a 'O' or an 'X' as a target. Your task is to identify the target.\n\nIf you see an 'O' press 'z' on the keyboard\nIf you see an 'X' press 'm' on the keyboard\n\nThe first 10 trials that follow this screen are practice trials.\n\nPress the spacebar to continue",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Initialize components for Routine "simon_setup"
  simon_setupClock = new util.Clock();
  // Initialize components for Routine "simon_trial"
  simon_trialClock = new util.Clock();
  fixation_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  left_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('1.0000, 1.0000, 1.0000'),  opacity: 1,
    depth: -1.0 
  });
  
  right_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('-1.0000, -1.0000, -1.0000'),  opacity: 1,
    depth: -2.0 
  });
  
  ITI = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_instructions"
  trial_instructionsClock = new util.Clock();
  text_norm_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm_2',
    text: "You are now moving onto the test phase. This part of the experiment will involve 10 trials.\n\nThe requirements are the same as the practice block - identify the target that is presented.\n\nIf you see an 'O' press 'z' on the keyboard\nIf you see an 'X' press 'm' on the keyboard\n\nPress the spacebar to continue",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align_2
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_instruct_allKeys;
var prac_instructionsComponents;
function prac_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_instructions' ---
    t = 0;
    prac_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_instructions.started', globalClock.getTime());
    key_instruct.keys = undefined;
    key_instruct.rt = undefined;
    _key_instruct_allKeys = [];
    // keep track of which components have finished
    prac_instructionsComponents = [];
    prac_instructionsComponents.push(text_norm);
    prac_instructionsComponents.push(key_instruct);
    
    for (const thisComponent of prac_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_instructions' ---
    // get current time
    t = prac_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm* updates
    if (t >= 0.0 && text_norm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm.tStart = t;  // (not accounting for frame time here)
      text_norm.frameNStart = frameN;  // exact frame index
      
      text_norm.setAutoDraw(true);
    }
    
    
    // *key_instruct* updates
    if (t >= 0.0 && key_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct.tStart = t;  // (not accounting for frame time here)
      key_instruct.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.clearEvents(); });
    }
    
    if (key_instruct.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_allKeys = _key_instruct_allKeys.concat(theseKeys);
      if (_key_instruct_allKeys.length > 0) {
        key_instruct.keys = _key_instruct_allKeys[0].name;  // just the first key pressed
        key_instruct.rt = _key_instruct_allKeys[0].rt;
        key_instruct.duration = _key_instruct_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_instructions' ---
    for (const thisComponent of prac_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct.corr, level);
    }
    psychoJS.experiment.addData('key_instruct.keys', key_instruct.keys);
    if (typeof key_instruct.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct.rt', key_instruct.rt);
        psychoJS.experiment.addData('key_instruct.duration', key_instruct.duration);
        routineTimer.reset();
        }
    
    key_instruct.stop();
    // the Routine "prac_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice;
function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'simon_prac_order.csv',
      seed: undefined, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice of practice) {
      snapshot = practice.getSnapshot();
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(simon_setupRoutineBegin(snapshot));
      practiceLoopScheduler.add(simon_setupRoutineEachFrame());
      practiceLoopScheduler.add(simon_setupRoutineEnd(snapshot));
      practiceLoopScheduler.add(simon_trialRoutineBegin(snapshot));
      practiceLoopScheduler.add(simon_trialRoutineEachFrame());
      practiceLoopScheduler.add(simon_trialRoutineEnd(snapshot));
      practiceLoopScheduler.add(practiceLoopEndIteration(practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'simon_task_order.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(simon_setupRoutineBegin(snapshot));
      trialsLoopScheduler.add(simon_setupRoutineEachFrame());
      trialsLoopScheduler.add(simon_setupRoutineEnd(snapshot));
      trialsLoopScheduler.add(simon_trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(simon_trialRoutineEachFrame());
      trialsLoopScheduler.add(simon_trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var bindings;
var left_stim_text;
var right_stim_text;
var ans;
var simon_setupComponents;
function simon_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'simon_setup' ---
    t = 0;
    simon_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('simon_setup.started', globalClock.getTime());
    // Run 'Begin Routine' code from simon_config
    if ((! expInfo["counterbalance"])) {
        expInfo["counterbalance"] = "0";
    }
    if ((expInfo["counterbalance"] === "0")) {
        bindings = {"X": "m", "O": "z"};
        if ((condition === "incongruent")) {
            if ((stim === "X")) {
                left_stim_text = stim;
                right_stim_text = "";
                ans = "m";
            } else {
                if ((stim === "O")) {
                    left_stim_text = "";
                    right_stim_text = stim;
                    ans = "z";
                }
            }
        } else {
            if ((condition === "congruent")) {
                if ((stim === "X")) {
                    left_stim_text = "";
                    right_stim_text = stim;
                    ans = "m";
                } else {
                    if ((stim === "O")) {
                        left_stim_text = stim;
                        right_stim_text = "";
                        ans = "z";
                    }
                }
            }
        }
    } else {
        if ((expInfo["counterbalance"] === "1")) {
            bindings = {"O": "m", "X": "z"};
            if ((condition === "incongruent")) {
                if ((stim === "X")) {
                    left_stim_text = "";
                    right_stim_text = stim;
                    ans = "z";
                } else {
                    if ((stim === "O")) {
                        left_stim_text = stim;
                        right_stim_text = "";
                        ans = "m";
                    }
                }
            } else {
                if ((condition === "congruent")) {
                    if ((stim === "X")) {
                        left_stim_text = stim;
                        right_stim_text = "";
                        ans = "z";
                    } else {
                        if ((stim === "O")) {
                            left_stim_text = "";
                            right_stim_text = stim;
                            ans = "m";
                        }
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    simon_setupComponents = [];
    
    for (const thisComponent of simon_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function simon_setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'simon_setup' ---
    // get current time
    t = simon_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of simon_setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function simon_setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'simon_setup' ---
    for (const thisComponent of simon_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('simon_setup.stopped', globalClock.getTime());
    // the Routine "simon_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_allKeys;
var simon_trialComponents;
function simon_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'simon_trial' ---
    t = 0;
    simon_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('simon_trial.started', globalClock.getTime());
    left_stim.setText(left_stim_text);
    right_stim.setText(right_stim_text);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    // keep track of which components have finished
    simon_trialComponents = [];
    simon_trialComponents.push(fixation_cross);
    simon_trialComponents.push(left_stim);
    simon_trialComponents.push(right_stim);
    simon_trialComponents.push(ITI);
    simon_trialComponents.push(resp);
    
    for (const thisComponent of simon_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function simon_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'simon_trial' ---
    // get current time
    t = simon_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_cross* updates
    if (t >= 0.0 && fixation_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross.tStart = t;  // (not accounting for frame time here)
      fixation_cross.frameNStart = frameN;  // exact frame index
      
      fixation_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross.setAutoDraw(false);
    }
    
    // *left_stim* updates
    if (t >= 0.0 && left_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_stim.tStart = t;  // (not accounting for frame time here)
      left_stim.frameNStart = frameN;  // exact frame index
      
      left_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_stim.setAutoDraw(false);
    }
    
    // *right_stim* updates
    if (t >= 0.0 && right_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_stim.tStart = t;  // (not accounting for frame time here)
      right_stim.frameNStart = frameN;  // exact frame index
      
      right_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_stim.setAutoDraw(false);
    }
    
    // *ITI* updates
    if (t >= 1.5 && ITI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ITI.tStart = t;  // (not accounting for frame time here)
      ITI.frameNStart = frameN;  // exact frame index
      
      ITI.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ITI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ITI.setAutoDraw(false);
    }
    
    // *resp* updates
    if (t >= 0.2 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    frameRemains = 0.2 + 1.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[0].name;  // just the first key pressed
        resp.rt = _resp_allKeys[0].rt;
        resp.duration = _resp_allKeys[0].duration;
        // was this correct?
        if (resp.keys == ans) {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of simon_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function simon_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'simon_trial' ---
    for (const thisComponent of simon_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('simon_trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes(ans)) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp.corr, level);
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        psychoJS.experiment.addData('resp.duration', resp.duration);
        }
    
    resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_instruct_2_allKeys;
var trial_instructionsComponents;
function trial_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_instructions' ---
    t = 0;
    trial_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial_instructions.started', globalClock.getTime());
    key_instruct_2.keys = undefined;
    key_instruct_2.rt = undefined;
    _key_instruct_2_allKeys = [];
    // keep track of which components have finished
    trial_instructionsComponents = [];
    trial_instructionsComponents.push(text_norm_2);
    trial_instructionsComponents.push(key_instruct_2);
    
    for (const thisComponent of trial_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_instructions' ---
    // get current time
    t = trial_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm_2* updates
    if (t >= 0.0 && text_norm_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm_2.tStart = t;  // (not accounting for frame time here)
      text_norm_2.frameNStart = frameN;  // exact frame index
      
      text_norm_2.setAutoDraw(true);
    }
    
    
    // *key_instruct_2* updates
    if (t >= 0.0 && key_instruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct_2.tStart = t;  // (not accounting for frame time here)
      key_instruct_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_2.clearEvents(); });
    }
    
    if (key_instruct_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_2_allKeys = _key_instruct_2_allKeys.concat(theseKeys);
      if (_key_instruct_2_allKeys.length > 0) {
        key_instruct_2.keys = _key_instruct_2_allKeys[0].name;  // just the first key pressed
        key_instruct_2.rt = _key_instruct_2_allKeys[0].rt;
        key_instruct_2.duration = _key_instruct_2_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_instructions' ---
    for (const thisComponent of trial_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct_2.corr, level);
    }
    psychoJS.experiment.addData('key_instruct_2.keys', key_instruct_2.keys);
    if (typeof key_instruct_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct_2.rt', key_instruct_2.rt);
        psychoJS.experiment.addData('key_instruct_2.duration', key_instruct_2.duration);
        routineTimer.reset();
        }
    
    key_instruct_2.stop();
    // the Routine "trial_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

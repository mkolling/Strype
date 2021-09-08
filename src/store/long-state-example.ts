import {CaretPosition, EditorFrameObjects, Definitions, RootContainerFrameDefinition, ImportsContainerDefinition, FuncDefContainerDefinition, MainFramesContainerDefinition} from "@/types/types";

const longStateExample: EditorFrameObjects = {
    0: {
        id: 0,
        frameType : RootContainerFrameDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [-1, -2, -3],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { },
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    "-1": {
        id: -1,
        frameType : ImportsContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [1,2],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {},
        isCollapsed: false,
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    "-2": {
        id: -2,
        frameType : FuncDefContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { },
        isCollapsed: false,
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    "-3": {
        id: -3,
        frameType : MainFramesContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [3,4,5,6,7,8],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {},
        isCollapsed: false,
        caretVisibility: CaretPosition.body,
        multiDragPosition: "",
    },

    1: {
        frameType: Definitions.ImportDefinition,
        id: 1,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -1,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code : "microbit", focused: false, error :"", shownLabel: true},
            1: {code : "*", focused: false, error :"", shownLabel: true},
            2: {code : "", focused: false, error :"", shownLabel: false} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    2: {
        frameType: Definitions.ImportDefinition,
        id: 2,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -1,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code : "", focused: false, error :"", shownLabel: false},
            1: {code : "music", focused: false, error :"", shownLabel: true},
            2: {code : "", focused: false, error :"", shownLabel: false} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    3: {
        frameType: Definitions.CommentDefinition,
        id: 3,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "At start:", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    4: {
        frameType: Definitions.EmptyDefinition,
        id: 4,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "music.play(music.NYAN)", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    5: {
        frameType: Definitions.EmptyDefinition,
        id: 5,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "display.scroll(\"I love Stride micro:bit !\")", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    6: {
        frameType: Definitions.CommentDefinition,
        id: 6,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "Maintain this behaviour while on:", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    7: {
        frameType: Definitions.VarAssignDefinition,
        id: 7,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {
            0: {code :  "currImg", focused: false, error :"", shownLabel: true},
            1: {code :  "Image.HEART", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    8: {
        frameType: Definitions.WhileDefinition,
        id: 8,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [9,10,11,12,13],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {0: {code :  "True", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    9: {
        frameType: Definitions.EmptyDefinition,
        id: 9,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 8,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "display.show(currImg)", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    10: {
        frameType: Definitions.VarAssignDefinition,
        id: 10,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 8,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {
            0: {code :  "gesture", focused: false, error :"", shownLabel: true},
            1: {code :  "accelerometer.current_gesture()", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    11: {
        frameType: Definitions.IfDefinition,
        id: 11,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 8,
        childrenIds: [14,15],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "gesture == \"shake\"", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    14: {
        frameType: Definitions.EmptyDefinition,
        id: 14,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 11,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "display.show(Image.SAD)", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    15: {
        frameType: Definitions.EmptyDefinition,
        id: 15,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 11,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "sleep(2000)", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    12: {
        frameType: Definitions.IfDefinition,
        id: 12,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 8,
        childrenIds: [16],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "button_a.is_pressed()", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    16: {
        frameType: Definitions.VarAssignDefinition,
        id: 16,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 12,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {
            0: {code :  "currImg", focused: false, error :"", shownLabel: true},
            1: {code :  "Image.CHESSBOARD", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    13: {
        frameType: Definitions.IfDefinition,
        id: 13,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 8,
        childrenIds: [17],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "button_b.is_pressed()", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    17: {
        frameType: Definitions.VarAssignDefinition,
        id: 17,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 13,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {
            0: {code :  "currImg", focused: false, error :"", shownLabel: true},
            1: {code :  "Image.COW", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },


};

export default longStateExample;



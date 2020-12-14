import {CaretPosition, EditorFrameObjects, Definitions, RootContainerFrameDefinition, ImportsContainerDefinition, FuncDefContainerDefinition, MainFramesContainerDefinition} from "@/types/types";

const initialTestState: EditorFrameObjects = {
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
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {},
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
        childrenIds: [1,5,6,7],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {},
        caretVisibility: CaretPosition.body,
        multiDragPosition: "",
    },

    1: {
        frameType: Definitions.IfDefinition,
        id: 1,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [2],
        jointParentId: 0,
        jointFrameIds: [3],
        contentDict: { 0: {code :  "1", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },

    2: {
        frameType: Definitions.EmptyDefinition,
        id: 2,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 1,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "2", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    3: {
        frameType: Definitions.ElifDefinition,
        id: 3,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [4],
        jointParentId: 1,
        jointFrameIds: [],
        contentDict: { 0: {code :  "3", focused: false, error :"", shownLabel: true} },
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
        parentId: 3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "4", focused: false, error :"", shownLabel: true} },
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
        contentDict: { 0: {code :  "5", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    6: {
        frameType: Definitions.EmptyDefinition,
        id: 6,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "6", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
    7: {
        frameType: Definitions.EmptyDefinition,
        id: 7,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { 0: {code :  "7", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        error: "",
        multiDragPosition: "",
    },
   


};

export default initialTestState;



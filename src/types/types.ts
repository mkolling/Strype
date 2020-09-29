import toggleFrameLabelsDefs, {KeyModifier} from "@/constants/toggleFrameLabelCommandsDefs"; 

// Type Definitions

/**
 *  NOTE that all types start with a lower-case as this is the way TS works.
 */

export interface FrameObject {
    frameType: FramesDefinitions;
    id: number;
    parentId: number; //this is the ID of a parent frame (example: the if frame of a inner while frame). Value can be 0 (root), 1+ (in a level), -1 for a joint frame
    childrenIds: number[]; //this contains the IDs of the children frames
    jointParentId: number; //this is the ID of the first sibling of a joint frame (example: the if frame of a elif frame under that if), value can be -1 if none, 1+ otherwise
    jointFrameIds: number[]; //this contains the IDs of the joint frames
    caretVisibility: CaretPosition;
    contentDict: { [index: number]: {code: string ; focused: boolean ; error: string; shownLabel: boolean}}; //this contains the label input slots data listed as a key value pairs array (key = index of the slot)
    error?: string;
}

export interface ToggleFrameLabelCommandDef {
    type: string;
    modifierKeyShortcuts: KeyModifier[];
    keyShortcut: string;
    displayCommandText: string;
}

export interface FrameLabel {
    label: string;
    optionalLabel?: boolean;
    toggleLabelCommand?: ToggleFrameLabelCommandDef;
    slot: boolean;
    defaultText: string;
    optionalSlot?: boolean;
}


// There are three groups of draggable frames.
// You can drag from the main code to the body of a method and vice-versa, 
// but you cannot drag from/to imports or drag method signatures
export enum DraggableGroupTypes {
    imports = "imports",
    code = "code",
    functionSignatures = "functionSignatures",
    ifCompound = "ifCompound",
    tryCompound = "tryCompound",
    none = "none",
}

export enum CaretPosition {
    body = "caretBody",
    below = "caretBelow",
    both = "both",
    none = "none",
}

export interface CurrentFrame {
    id: number;
    caretPosition: CaretPosition;
}

export interface EditorFrameObjects {
    [id: number]: FrameObject;
}

export interface LineAndSlotPositions {
    [line: number]: {frameId: number ; slotStarts: number[]};
}

// This is an array with all the frame Definitions objects.
// Note that the slot variable of each objects tells if the
// Label needs an editable slot as well attached to it.

export interface EditableSlotPayload {
    frameId: number;
    slotId: number;
    code: string;
    initCode: string;
    isFirstChange: boolean;
}
export interface EditableFocusPayload {
    frameId: number;
    slotId: number;
    focused: boolean;
}
export interface AddFrameCommandDef {
    type: FramesDefinitions;
    description: string;
    shortcut: string;
    symbol?: string;
}

// This is an array with all the frame Definitions objects.
// Note that the slot variable of each objects tells if the
// Label needs an editable slot as well attached to it.
export interface FramesDefinitions {
    type: string;
    labels: FrameLabel[];
    allowChildren: boolean;
    forbiddenChildrenTypes: string[];
    jointFrameTypes: string[];
    colour: string;
    draggableGroup: DraggableGroupTypes;
    innerJointDraggableGroup: DraggableGroupTypes;
}

// Identifiers of the containers
export const ContainerTypesIdentifiers = {
    root: "root",
    importsContainer: "importsContainer",
    funcDefsContainer: "funcDefsContainer",
    framesMainContainer: "mainContainer",
}

const CommentFrameTypesIdentifier = {
    comment: "comment",
}
// Identifiers of the frame types
const ImportFrameTypesIdentifiers = {
    import: "import",
}

const FuncDefIdentifiers = {
    funcdef: "funcdef",
}

export const JointFrameIdentifiers = {
    elif: "elif",
    else: "else",
    except: "except",
    finally: "finally",
}

const StandardFrameTypesIdentifiers = {
    ...CommentFrameTypesIdentifier,
    empty: "",
    if: "if",
    for: "for",
    while: "while",
    break: "break",
    continue: "continue",
    try: "try",
    raise: "raise",
    with: "with",
    return: "return",
    varassign: "varassign",
    ...JointFrameIdentifiers,
}

export const AllFrameTypesIdentifier = {
    ...ImportFrameTypesIdentifiers,
    ...FuncDefIdentifiers,
    ...StandardFrameTypesIdentifiers,
}

export const DefaultFramesDefinition: FramesDefinitions = {
    type: StandardFrameTypesIdentifiers.empty,
    labels: [],
    allowChildren: false,
    forbiddenChildrenTypes: [],
    jointFrameTypes: [],
    colour: "",
    draggableGroup: DraggableGroupTypes.none,
    innerJointDraggableGroup: DraggableGroupTypes.none,
};

export const BlockDefinition: FramesDefinitions = {
    ...DefaultFramesDefinition,
    allowChildren: true,
    forbiddenChildrenTypes: Object.values(ImportFrameTypesIdentifiers)
        .concat(Object.values(FuncDefIdentifiers))
        .concat([StandardFrameTypesIdentifiers.else, StandardFrameTypesIdentifiers.elif, StandardFrameTypesIdentifiers.except, StandardFrameTypesIdentifiers.finally]),
    draggableGroup: DraggableGroupTypes.code,
};

export const StatementDefinition: FramesDefinitions = {
    ...DefaultFramesDefinition,
    forbiddenChildrenTypes: Object.values(AllFrameTypesIdentifier),
    draggableGroup: DraggableGroupTypes.code,
};

// Container frames
export const RootContainerFrameDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: ContainerTypesIdentifiers.root,
    draggableGroup: DraggableGroupTypes.none,
}

export const ImportsContainerDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: ContainerTypesIdentifiers.importsContainer,
    labels: [
        { label: "Imports:", slot: false, defaultText: ""},
    ],
    forbiddenChildrenTypes: Object.values(AllFrameTypesIdentifier)
        .filter((frameTypeDef: string) => !Object.values(ImportFrameTypesIdentifiers).includes(frameTypeDef) && frameTypeDef !== CommentFrameTypesIdentifier.comment),
    colour: "#BBC6B6",
    draggableGroup: DraggableGroupTypes.imports,
}

export const FuncDefContainerDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: ContainerTypesIdentifiers.funcDefsContainer,
    labels: [
        { label: "Function Definitions:", slot: false, defaultText: ""},
    ],
    forbiddenChildrenTypes: Object.values(AllFrameTypesIdentifier)
        .filter((frameTypeDef: string) => !Object.values(FuncDefIdentifiers).includes(frameTypeDef) && frameTypeDef !== CommentFrameTypesIdentifier.comment),
    colour: "#BBC6B6",
    draggableGroup: DraggableGroupTypes.functionSignatures,

}

export const MainFramesContainerDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: ContainerTypesIdentifiers.funcDefsContainer,
    labels: [
        { label: "Your code:", slot: false, defaultText: ""},
    ],
    forbiddenChildrenTypes: BlockDefinition.forbiddenChildrenTypes.concat(Object.values(AllFrameTypesIdentifier)
        .filter((frameTypeDef: string) => !Object.values(StandardFrameTypesIdentifiers).includes(frameTypeDef))),
    colour: "#BBC6B6",
}

// Blocks
export const IfDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.if,
    labels: [
        { label: "if (", slot: true, defaultText: "condition" , optionalSlot: false},
        { label: ") :", slot: false, defaultText: ""},
    ],
    jointFrameTypes: [StandardFrameTypesIdentifiers.elif, StandardFrameTypesIdentifiers.else],
    colour: "#E0DFE4",
    innerJointDraggableGroup: DraggableGroupTypes.ifCompound,
};

export const ElifDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.elif,
    labels: [
        { label: "elif (", slot: true, defaultText: "condition", optionalSlot: false},
        { label: ") :", slot: false, defaultText: ""},
    ],
    draggableGroup: DraggableGroupTypes.ifCompound,
    jointFrameTypes: [StandardFrameTypesIdentifiers.elif, StandardFrameTypesIdentifiers.else],
};

export const ElseDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.else,
    labels: [{ label: "else:", slot: false, defaultText: ""}],
    draggableGroup: DraggableGroupTypes.ifCompound,
    jointFrameTypes: [StandardFrameTypesIdentifiers.finally],
};

export const ForDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.for,
    labels: [
        { label: "for ", slot: true, defaultText: "identifier", optionalSlot: false},
        { label: " in ", slot: true, defaultText: "list", optionalSlot: false},
        { label: " :", slot: false, defaultText: ""},
    ],
    jointFrameTypes:[StandardFrameTypesIdentifiers.else],
    colour: "#E4D6CE",
};

export const WhileDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.while,
    labels: [
        { label: "while (", slot: true, defaultText: "condition", optionalSlot: false},
        { label: ") :", slot: false, defaultText: ""},
    ],
    colour: "#E4D5D5",
};

export const TryDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.try,
    labels: [{ label: "try:", slot: false, defaultText: ""}],
    jointFrameTypes: [StandardFrameTypesIdentifiers.except, StandardFrameTypesIdentifiers.else, StandardFrameTypesIdentifiers.finally],
    colour: "#C7D9DC",
    innerJointDraggableGroup: DraggableGroupTypes.tryCompound,
};

export const ExceptDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.except,
    labels: [
        { label: "except ", slot: true, defaultText: "exception", optionalSlot: true},
        { label: ":", slot: false, defaultText: ""},
    ],
    jointFrameTypes: [StandardFrameTypesIdentifiers.except, StandardFrameTypesIdentifiers.else, StandardFrameTypesIdentifiers.finally],
    colour: "",
    draggableGroup: DraggableGroupTypes.tryCompound,
};

export const FinallyDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.finally,
    labels: [
        { label: "finally:", slot: false, defaultText: ""},
    ],
    colour: "",
    draggableGroup: DraggableGroupTypes.none,
};

export const FuncDefDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: FuncDefIdentifiers.funcdef,
    labels: [
        { label: "def ", slot: true, defaultText: "name", optionalSlot: false},
        { label: "(", slot: true, defaultText: "arguments", optionalSlot: true},
        { label: "):", slot: false, defaultText: ""},
    ],
    colour: "#ECECC8",
    draggableGroup: DraggableGroupTypes.functionSignatures,
};

export const WithDefinition: FramesDefinitions = {
    ...BlockDefinition,
    type: StandardFrameTypesIdentifiers.with,
    labels: [
        { label: "with ", slot: true, defaultText: "expression", optionalSlot: false},
        { label: " as ", slot: true, defaultText: "identifier", optionalSlot: false},
        { label: " :", slot: false, defaultText: ""},
    ],
    colour: "#ede8f2",
};

// Statements
export const EmptyDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: StandardFrameTypesIdentifiers.empty,
    labels: [{ label: "", slot: true, defaultText: "method call", optionalSlot: true}],
    colour: "#F6F2E9",
};

export const ReturnDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: StandardFrameTypesIdentifiers.return,
    labels: [{ label: "return ", slot: true, defaultText: "expression", optionalSlot: true}],
    colour: "#F6F2E9",
};

export const VarAssignDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: StandardFrameTypesIdentifiers.varassign,
    labels: [
        { label: "", slot: true, defaultText: "identifier", optionalSlot: false},
        { label: " = ", slot: true, defaultText: "value", optionalSlot: false},
    ],
    colour: "#F6F2E9",
};

export const BreakDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: StandardFrameTypesIdentifiers.break,
    labels: [
        { label: "break", slot: false, defaultText: "" },
    ],
    colour: "#F6F2E9",
};

export const ContinueDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: StandardFrameTypesIdentifiers.continue,
    labels: [
        { label: "continue", slot: false, defaultText: "" },
    ],
    colour: "#F6F2E9",
};

export const RaiseDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: StandardFrameTypesIdentifiers.raise,
    labels: [
        { label: "raise", slot: true, defaultText: "exception", optionalSlot: true },
    ],
    colour: "#F6F2E9",
};

export const ImportDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: ImportFrameTypesIdentifiers.import,
    labels: [
        { label: "from ", slot: true, defaultText: "module", optionalLabel: true, toggleLabelCommand:toggleFrameLabelsDefs.ToggleFrameLabelCommandDefs.importFrom, optionalSlot: false},
        { label: "import ", slot: true, defaultText: "function/class", optionalSlot: false},
        { label: "as ", slot: true, defaultText: "module", optionalLabel: true, toggleLabelCommand:toggleFrameLabelsDefs.ToggleFrameLabelCommandDefs.importAs, optionalSlot: false},
    ],    
    colour: "#CBD4C8",
    draggableGroup: DraggableGroupTypes.imports,
};

export const CommentDefinition: FramesDefinitions = {
    ...StatementDefinition,
    type: StandardFrameTypesIdentifiers.comment,
    labels: [{ label: "# ", slot: true, defaultText: "your comment", optionalSlot: true}],
    colour: "#F6F2E9",
};

export const FrameContainersDefinitions = {
    RootContainerFrameDefinition,
    ImportsContainerDefinition,
    FuncDefContainerDefinition,
    MainFramesContainerDefinition,
}

export const Definitions = {
    IfDefinition,
    ElifDefinition,
    ElseDefinition,
    ForDefinition,
    WhileDefinition,
    BreakDefinition,
    ContinueDefinition,
    RaiseDefinition,
    TryDefinition,
    ExceptDefinition,
    FinallyDefinition,
    FuncDefDefinition,
    WithDefinition,
    EmptyDefinition,
    ReturnDefinition,
    VarAssignDefinition,
    ImportDefinition,
    CommentDefinition,
};

/**
 *  Types for the messages banner
 **/

export interface MessageButton {
    label: string;
    action: VoidFunction | string;
}

export interface FormattedMessageArgKeyValuePlaceholder {
    key: string;
    placeholderName: string;
}

export const FormattedMessageArgKeyValuePlaceholders: {[id: string]: FormattedMessageArgKeyValuePlaceholder} = {
    error: {key:"errorMsg", placeholderName : "{error_placeholder}"},
}

export interface FormattedMessage {
    path: string;
    args: { [id: string]: string};
}

export const DefaultFormattedMessage: FormattedMessage = {
    path: "",
    args: {},
}

export const MessageDefinedActions = {
    closeBanner: "close",
    undo: "undo",
}

export enum imagePaths {
    empty = "",
    transferHexFile = "transferHexFile.svg",
}

export interface MessageDefinition {
    type: string;
    message: string | FormattedMessage;
    buttons: MessageButton[];
    path: imagePaths;
}

export const MessageTypes = {
    noMessage: "none",
    largeDeletion: "largeDeletion",
    imageDisplay: "imageDisplay",
    uploadSuccessMicrobit:"uploadSuccessMicrobit",
    noUndo: "noUndo",
    noRedo: "noRedo",
}

//empty message
const NoMessage: MessageDefinition = {
    type: MessageTypes.noMessage,
    message: "",
    buttons: [],
    path: imagePaths.empty,
};

//message for large deletation (undo)
const LargeDeletion: MessageDefinition = {
    type: MessageTypes.largeDeletion,
    message: "messageBannerMessage.deleteLargeCode",
    buttons:[{label: "buttonLabel.undo", action:MessageDefinedActions.undo}],
    path: imagePaths.empty,
};

//download hex message
const DownloadHex: MessageDefinition = {
    type: MessageTypes.imageDisplay,
    message: "",
    buttons: [],
    path: imagePaths.transferHexFile,
};

//message for upload code success in microbit progress
const UploadSuccessMicrobit: MessageDefinition = {
    type: MessageTypes.uploadSuccessMicrobit,
    message: "messageBannerMessage.uploadSuccessMicrobit",
    buttons:[],
    path: imagePaths.empty,

};

//message for upload code failure in microbit progress
const UploadFailureMicrobit: MessageDefinition = {
    type: MessageTypes.uploadSuccessMicrobit,
    message: {
        path: "messageBannerMessage.uploadFailureMicrobit",
        args: {
            [FormattedMessageArgKeyValuePlaceholders.error.key]: FormattedMessageArgKeyValuePlaceholders.error.placeholderName,
        },
    },
    buttons:[],
    path: imagePaths.empty,
};

//messages to inform the user there is no undo/redo to perfom
const NoUndo: MessageDefinition = {
    type: MessageTypes.noUndo,
    message: "messageBannerMessage.noUndo",
    buttons:[],
    path: imagePaths.empty,

};

const NoRedo: MessageDefinition = {
    type: MessageTypes.noRedo,
    message: "messageBannerMessage.noRedo",
    buttons:[],
    path: imagePaths.empty,

};

export const MessageDefinitions = {
    NoMessage,
    LargeDeletion,
    UploadSuccessMicrobit,
    UploadFailureMicrobit,
    DownloadHex,
    NoUndo,
    NoRedo,
};

//WebUSB listener
export interface WebUSBListener {
    //Callback functions called on the listener by the webUSB.ts file
    onUploadProgressHandler: {(percent: number): void};
    onUploadSuccessHandler: VoidFunction;
    onUploadFailureHandler: {(errorMsg: string): void};
}

//Object difference
export interface ObjectPropertyDiff {
    //The property path is formatted as "level1_<bool>.level2_<bool>. ... .levelN" 
    //where <bool> is a boolean flag value indicating if the corresponding level is for an array or not.
    propertyPathWithArrayFlag: string;
    value: any;
}

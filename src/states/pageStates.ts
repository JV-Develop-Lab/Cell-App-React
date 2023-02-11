import {atom} from "recoil";
import {TypeActivities} from "../stackflow";

const mainPageState = atom<TypeActivities>({
    key: 'mainPageState',
    default: "Home",
});

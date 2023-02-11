import {atom} from "recoil";
import {activitiesType} from "../stackflow";

const mainPageState = atom<activitiesType>({
    key: 'mainPageState',
    default: "Home",
});

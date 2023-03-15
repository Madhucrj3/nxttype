import { action, observable } from "mobx";
import { DARK, LIGHT } from "../../constants/themes";
import { HOME } from "../../constants/MenuItem";
import { IndividualVideoDetailInterface, VideoDetailInterface } from "../type";
class GlobalStore {
    @observable 
    themes:string
    @observable
    status:string
    @observable
    hasCrossBanner:boolean=true
    constructor()
    {
        console.log("Came INside Constructor")
        this.themes=LIGHT;
        this.status=HOME;
    }
    @action
    setTheme=()=>{
        console.log("globalStore"+ this.themes);
        if(this.themes===LIGHT)
        this.themes=DARK;
        else
        this.themes=LIGHT;
        console.log("globalStoreupdated"+ this.themes);

    }
    @action
    setStatus=(value:string)=>{
        this.status=value;
    }
    @action
    setCrossBanner=()=>{
       this.hasCrossBanner=false;
    }
}
const globalStore=new GlobalStore();
export default globalStore;
export {GlobalStore}

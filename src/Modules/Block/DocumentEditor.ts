import { Content } from "./_types";

export default class DocumentEditor {
    constructor(_dataBlockId : string){
        this.dataBlockId = _dataBlockId;
    }

    private dataBlockId;
    private selectIdRange : string[] = [];
    private docData : Content[] = [];
    private setDocData  : Function = ()=>{};

    setData(_docData : Content[], _setDocData : Function){
        this.docData = _docData;
        this.setDocData = _setDocData;
    }

    setSelectIdRange(start : string, end : string){
        this.selectIdRange = [start, end];
    }

    setDataNodeId(_dataBlockId : string){
        this.dataBlockId = _dataBlockId;
    }

    fnInput(e:React.FormEvent){
        
    }

    fnSelect(e:React.BaseSyntheticEvent){
        const selection = document.getSelection();
        this.setSelectIdRange(findNodeId(selection!.anchorNode!), findNodeId(selection?.focusNode!));
    }

    fnKeyDown(e : React.KeyboardEvent){
        if(e.key === 'Enter'){
            e.preventDefault();
            this.fnEnter();
        }
    }

    fnRemove(){
        const selection = document.getSelection();
        selection?.getRangeAt(0).deleteContents();
    }

    fnColor(){
        const selection = document.getSelection();
    }

    fnEnter(){
        const newNode : Content = {
            contentId : crypto.randomUUID(),
            textArray : ['new One'],
            isEditable : true
        };
        const idx = this.docData.findIndex(d=>d.contentId === this.selectIdRange[0]);
        this.docData.splice(idx+1,0,newNode);
        this.setDocData([...this.docData]);
    }

}

function findNodeId(node : Node) : string{
    let nodeId = '';
    if(node.nodeName === 'DIV'){
        return node.dataset.contentId;
    }
    if(node.parentNode?.nodeName === "DIV"){
        if(node.parentNode.dataset.contentId){
            return node.parentNode.dataset.contentId!;
        }
    }
    nodeId = findNodeId(node.parentNode!);
    return nodeId;
}
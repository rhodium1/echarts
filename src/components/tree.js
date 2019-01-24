import React from 'react';
import echarts from 'echarts';
import '../tree.css'
class Tree1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clientX: 0,
            clientY: 0,
            showMenu: false,
            curNode: 0,
            data: [{name: 'top', children:[{
                name:"son1",children:[{name:"grandson"}]
            },{
                name:"son2"
            }]}
            ],
        }
    }
    componentDidMount(){
        this.renderChart();
    }
    componentDidUpdate(){
        this.renderChart();
    }
    renderChart(){
        let myChart = echarts.init(document.getElementById("tree1"));
        myChart.setOption({
            series:[
                {
                    type: 'tree',
                    data:this.state.data,
                    label:{
                        position: 'top'
                    }
                }
            ]
        })
        myChart.off('contextmenu');
        myChart.on("contextmenu", (value) => { 
            this.setState({
                showMenu: true,
                clientX: value.event.event.clientX,
                clientY: value.event.event.clientY,
                curNode: value.dataIndex
            })
            value.event.stop();
        })
    }
    addNode = () =>{
        let value = window.prompt("请输入节点名"), i = 1, data = this.state.data, stack = [data[0]];
        while(stack.length > 0){
            
            let cur = stack.pop();
            if(i === this.state.curNode){
                if(!cur.children){
                    cur.children = [{name: value}];
                }else{
                cur.children.push({name:value});
                }
                break;
            }
            i++;
            if(cur.children && cur.children.length > 0){
                for(let j = cur.children.length -1; j>= 0; j--){
                    stack.push(cur.children[j]);
                    
                }
            }
        }
        this.setState({
            data,
        })

    }
    deleteNode = () =>{
        let flag  = window.confirm("确定删除此节点及其子节点吗");
        if(flag){

        }
    }
    render(){
        let left = this.state.clientX, top = this.state.clientY;
        return <div><div id="tree1" style={{height:'500px'}}></div>{
             this.state.showMenu &&
             <div className="back" onClick={()=>{this.setState({showMenu:false})}}>
            <ul className="menu_list" style={{left, top}}>
                <li className="menu"><button className="btn" onClick={this.addNode}>添加节点</button></li>
                <li className="menu"><button className="btn delete">删除节点</button></li>
            </ul>
            </div>}
        </div>
    }
}
export default Tree1;
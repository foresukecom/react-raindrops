import React, { Component } from "react";
import { Transition } from 'react-transition-group'

class Raindrops extends Component {
    render() {
        const Raindrops = this.props.rainList.map( rain => 
            <RainItem
                key={rain.id}
                shift={this.props.shift}
                {...rain}
            />
            )

        return(
            <div>
                {Raindrops}
            </div>
        );
    }
}
class RainItem extends Component {
    constructor(props){
        super(props);

        const random = Math.round( Math.random() * window.innerWidth );
        const styles = {
            entering: {
                backgroundColor: 'skyblue',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                transform: 'translateX(' + random + 'px) translateY(-100px)',
                position: 'absolute',
                zIndex: '-1',
            },
            entered: {
                backgroundColor: 'greenyellow',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                transform: 'translateX(' + random + 'px) translateY('+ window.innerHeight*2 +'px)',
                transition: 'all 1.5s ease-in-out',
                position: 'absolute',
                zIndex: '-1',
            }
        }
        this.state = { 
            styles,
        }

    }


    componentDidMount(){
        setTimeout(()=>{
            this.props.shift();
        }, 1500);
    }

    render() {
        return(
            <div>
                <Transition
                    in={true}
                    appear={true}
                    timeout={0}
                >
                    { state => (
                    <div style={this.state.styles[state]}>
                    </div>
                    )}
                </Transition>
            </div>
        )
    }
}

export default Raindrops;
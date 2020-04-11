import React, { Component } from 'react'
import { Search, ColorBox } from '../../../components'
import ntc from 'ntc'

class Galery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: [],
            colorShow: []
        }
    }

    componentWillMount() {
        const color = this.generateColor()
        this.setState({color: color, colorShow: color})
    }

    generateColor = () => {
        const letters = '0123456789ABCDEF';
        let tmp = []
        for (let i = 0; i < 42; i++) {
            let color ='#';
            let colors = {};
            for (let j = 0; j < 6; j++) {
                color += `${letters[Math.floor(Math.random() * 16)]}`;
            }
            colors['id'] = i + 1
            colors['code'] = color
            colors['name'] = ntc.name(color)[1]
            tmp.push(colors)
        }

        return tmp;
    }

    handleChange = (c) => {
        if(c > 0){
            const colorSelected = this.state.color.filter(e => e.id == c)
            this.setState({ colorShow: colorSelected })
        }else{
            this.setState({ colorShow: this.state.color})
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Galery Color</h1>
                <div className="row">
                        <Search handleSearch={this.handleChange} data={this.state.color} />
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    {
                        this.state.colorShow.length > 0 ?
                            this.state.colorShow.map((v, i) => {
                                return <div key={v.id} className="col-sm-2">
                                    <ColorBox code={v.code} />
                                </div>
                            }) : ''
                    }

                </div>
            </div>
        )
    }
}

export default Galery;
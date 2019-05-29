import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layout';
import FormComponent from '../share/FormComponent';
import { withRouter } from 'react-router';
class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    onAdd = (data) => {
        let id = Math.random();
        let ar = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
        let ItemNew = [...ar, { id: id, title: data.title, description: data.description, date: data.date, image: data.image }]
        localStorage.setItem('data', JSON.stringify(ItemNew))
        this.props.history.push('/');
    }
    onUpdate = (data) => {
        let dataIndex = JSON.parse(localStorage.getItem('data')).findIndex(item => item.id === data.id);
        let dataEdit = JSON.parse(localStorage.getItem('data'));
        dataEdit[dataIndex].title = data.title
        dataEdit[dataIndex].description = data.description
        dataEdit[dataIndex].date = data.date
        dataEdit[dataIndex].image = data.image
        localStorage.setItem('data', JSON.stringify(dataEdit))
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <HeaderLayout></HeaderLayout>
                <FormComponent data={this.state.data} params={this.props.match.params} onAdd={this.onAdd} onUpdate={this.onUpdate}></FormComponent>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default withRouter(FormPage);
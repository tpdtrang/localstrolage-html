import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layout';
import IndexComponent from '../share/IndexComponent'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 'Using an Online Organizational Tool for your Book Club', description: 'Have you ever hosted a book club event that was poorly attended? You read the book, cooked a ', date: '20/10/2019', image: 'http://s1.img.yan.vn/YanNews/2167221/201610/20161013-111105-anh5_600x400.jpg' },
        { id: 2, title: 'Using an Online Organizational Tool for your Book Club', description: 'Have you ever hosted a book club event that was poorly attended? You read the book, cooked a ', date: '20/10/2019', image: 'http://static2.yan.vn/YanNews/2167221/201707/20170704-054831-vscocam_600x450.jpg' },
        { id: 3, title: 'Using an Online Organizational Tool for your Book Club', description: 'Have you ever hosted a book club event that was poorly attended? You read the book, cooked a ', date: '20/10/2019', image: 'https://cafebiz.cafebizcdn.vn/thumb_w/600/2018/8/6/photo1533552086183-1533552086183914647728.jpg' }
      ]
    }
  }
  componentDidMount() {
    if (localStorage.data) {
      this.setState({
        data: JSON.parse(localStorage.getItem('data'))
      })
    }
  }
  onDelete = (id) => {
    let data = JSON.parse(localStorage.getItem('data'));
    let dataNew = data.filter(data => data.id !== id)
    this.setState({
      data: dataNew
    })
    localStorage.setItem('data', JSON.stringify(dataNew));
  }


  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <IndexComponent data={this.state.data} onDelete={this.onDelete}></IndexComponent>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default IndexPage;
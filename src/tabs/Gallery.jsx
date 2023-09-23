import {Component} from 'react';

import * as ImageService from 'service/image-service';
import {Button, SearchForm, Grid, GridItem, Text, CardItem} from 'components';
import {getImages} from "service/image-service";

export class Gallery extends Component {
  state = {
    imgGallery: [],
    query: '',
    page: 1,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.getGallery()
  }

  getSearchQuery = (query) => {
    this.setState({query});
  }

  getGallery = async () => {
    try {
      const data = await ImageService.getImages(this.state.query, this.state.page)
      console.log(data)
    }
    catch (error) {
      console.log(error.message)
    }

  }

  render() {

    console.log(this.state.query)
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <SearchForm
          getSearchQuery={this.getSearchQuery}
        />
      </>
    );
  }
}

import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    imgGallery: [],
    query: '',
    page: 1,
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    )
      this.getGallery();
  }

  getSearchQuery = query => {
    this.setState({ query });
  };

  getGallery = async () => {
    try {
      const { photos, total_results, per_page, page } =
        await ImageService.getImages(this.state.query, this.state.page);

      this.setState(prev => ({
        imgGallery: [...prev.imgGallery, ...photos],
        showBtn: page < Math.ceil(total_results / per_page),
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  handleBtn = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <SearchForm getSearchQuery={this.getSearchQuery} />
        <Grid>
          {this.state.imgGallery.map(({ id, avg_color, alt, src }) => {
            return (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={src.large} alt={alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>
        {this.state.showBtn && (
          <Button onClick={this.handleBtn}>Load more</Button>
        )}
      </>
    );
  }
}

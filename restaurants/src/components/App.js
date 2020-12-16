import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchRestaurants from './SearchRestaurants';
import AllRestaurants from './AllRestaurants';
import Pagination from './Pagination';
import 'bootstrap/dist/js/bootstrap.bundle';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      states: [],
      genres: [],
      isLoaded: false,
      orderBy: 'name',
      orderDir: 'asc',
      byState: 'All',
      byGenre: 'All',
      queryText: '',
      currentPage: 1,
      itemsPerPage: 10
    };

    this.filterByState = this.filterByState.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.searchRestaurants = this.searchRestaurants.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setCurrentPage(currentPage) {
    this.setState({
      currentPage: currentPage
    });
  }

  filterByState(byState) {
    this.setState({
      byState: byState,
      currentPage: 1
    });
  }

  filterByGenre(byGenre) {
    this.setState({
      byGenre: byGenre,
      currentPage: 1
    });
  }

  searchRestaurants(guery, keyCode) {
    if (keyCode === 13) {
      this.setState({
        queryText: guery,
        currentPage: 1
      });
    }
  }

  componentDidMount() {
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    })
      .then(res => res.json())
      .then(result => {
        const restaurants = result.map(item => {
          return item;
        });

        const states = result.map(item => item.state)
        let uniqueAndSortedStates = [...new Set(states)].sort()
        uniqueAndSortedStates.unshift("All");

        const genres = result.map(item => item.genre.split(",")).flat()
        let uniqueAndSortedGenres = [...new Set(genres)].sort()
        uniqueAndSortedGenres.unshift("All")

        this.setState({
          items: restaurants,
          states: uniqueAndSortedStates,
          genres: uniqueAndSortedGenres,
          isLoaded: true,
        });
      }).catch((err) => {
        console.log(err);
      });
  }


  render() {

    const { isLoaded, states, genres, itemsPerPage } = this.state;
    let order;
    let sortedItems = this.state.items;

    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    sortedItems = sortedItems.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return (

        eachItem['name']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['city']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['genre']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
      );
    });

    let sortedFilteredItems = ''
    if (this.state.byState === 'All') {
      sortedFilteredItems = sortedItems;
    } else {
      sortedFilteredItems = sortedItems.filter(item => item.state === this.state.byState);
    }
    if (this.state.byGenre === 'All') {
      // eslint-disable-next-line
      sortedFilteredItems = sortedFilteredItems;
    } else {
      sortedFilteredItems = sortedFilteredItems.filter(item => item.genre.toLowerCase()
        .includes(this.state.byGenre.toLowerCase()));
    }

    if (!isLoaded)
      return <div>Loading...</div>;

    let indexOfLastItem = this.state.currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = sortedFilteredItems.slice(indexOfFirstItem, indexOfLastItem)


    return (

      <main className='page bg-white' id='ratings'>
        <div className='container'>
          <div className='row'>
            <div className='col-mid-12 bg-white'>
              <div className='container'>

                <SearchRestaurants
                  states={states}
                  genres={genres}

                  byState={this.state.byState}
                  byGenre={this.state.byGenre}

                  filterByState={this.filterByState}
                  filterByGenre={this.filterByGenre}
                  searchRestaurants={this.searchRestaurants}
                />

                <AllRestaurants
                  restaurants={currentItems}
                />

                <Pagination
                  currentPage={this.state.currentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={sortedFilteredItems.length}
                  setCurrentPage={this.setCurrentPage}
                />

              </div>
            </div>
          </div>
        </div>

      </main>
    );
  }

}

export default App;
import React from 'react';
import axios from 'axios';
import Menu from './Menu';
import Footer from './Footer'
import './search.css';
import Loader from 'react-loader-spinner';

export default class search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: '',
            beritas: [],
            loading: 'false',
            load: 'false',
            first: 'true'
        };
    }

    changeSearchTerms = (event) => {
        this.setState({
            searchKeyword: event.target.value
        });
    }

    SearchButtonSubmit = (event) => {
        event.preventDefault();
        this.setState({
            searchResults: [],
            load:'true',
            loading:'true'
        });

        if (this.state.searchKeyword.length < 3) {
            alert('please input more than 3 characters');
            return;
        } else {
            // alert(`searching for ${this.state.searchKeyword}`);
            let ApiKey = "fa321e11647c0de12fe972ffc6c53468";
            axios.get(`http://api.mediastack.com/v1/news?access_key=${ApiKey}&languages=en&keywords=${this.state.searchKeyword}`)
                .then(res => {
                    this.state.load = false;
                    this.state.loading = 'false';
                    const beritas = res.data.data;
                    this.setState({ beritas });
                })
            // console.log(`2 ${this.state.loading}`);
        }
    }

    viewNewsButton(param) {
        // console.log(param);
        // console.log(`hi ${this.state.beritas[param].title}`);
        // alert('sukses');

        let title = this.state.beritas[param].title;

        this.props.history.push({
            pathname: '/newsDetail/' + title,
            state: {
                title: this.state.beritas[param].title,
                description: this.state.beritas[param].description,
                img: this.state.beritas[param].image,
                author: this.state.beritas[param].author,
                url: this.state.beritas[param].url,
            }
        }
        );
    }


    render() {
        const searchForm = () => {
            return (
                <div className='searchbox'>
                    <h1>What are you searching for?</h1>
                    <form>
                        <input type="text" value={this.state.searchKeyword || ''} onChange={this.changeSearchTerms} placeholder='Search Keyword' />
                        <button type='submit' onClick={this.SearchButtonSubmit}><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            );
        };

        const searchKonten = () => {
            // console.log(this.state.beritas.length);
            // console.log(`state: ${this.state.loading}`);
            if (this.state.first === 'true') {
                this.state.first = 'false';
                return(
                    <div className='empty'>
                        <hr></hr>
                    </div>
                )
            }
            else {
                if (this.state.loading === 'false' && this.state.beritas.length === 0) {
                    return (
                        <div className='NoKonten'>
                            <hr></hr>
                            <h1>No Result to show</h1>
                        </div>
                    )
                }

                return (
                    <div>
                        <hr></hr>
                        <h1 className='kontenJudul'>Search Results</h1>

                        {this.state.load ? <Loader type="Oval" color="#726A95" height="4vw" width="4vw" className='loadStyle' /> : this.state.beritas.map((berita, index) =>
                            <ul className='konten' key={berita.title}>
                                <li className='kontenTitle'>{berita.title}</li>
                                <li className='kontenDesc'>Category : {berita.category}</li>
                                <li>
                                    {/* using link (canceled) */}
                                    {/* <Link to={{
                                        pathname:'/newsDetail',
                                        state:{
                                            title:this.state.beritas[index].title,
                                        }
                                        }}  */}
                                    <button value='view' onClick={() => this.viewNewsButton(index)}>View Details <i class="fa fa-chevron-right" aria-hidden="true"></i></button></li>

                            </ul>

                        )}
                    </div>
                )
            }
        }

        return (
            <div>
                <Menu />
                {searchForm()}
                {searchKonten()}
                <Footer />
            </div>
        )
    }
}

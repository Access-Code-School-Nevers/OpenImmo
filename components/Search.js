import React from 'react'
import {Text, StyleSheet, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import {getFlatsFromApiWithSearchedText} from '../API/TMDBApi'



class Search extends React.Component {

constructor(props) {
    super(props)
    this.searchedText = ""
    this.page = 0 // compteur pour connaitre la page courante
    this.totalPages = 0 //nombre de pages totales pour savoir si on a atteint la fin des retours de l API TMDB
    this.state = {
      films: [],
      isLoading: false    //false par defaut car il n y a pas de chargement tant qu'on ne lance pas de recherche

    }
}

_loadFilms() {
  if (this.searchedText.length> 0) { // ssi le texte recherché n est pas vide
    this.setState({isLoading: true }) // lancement du chargement
    getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
      this.page = data.page
      this.totalPages = data.total_pages
      this.setState ({
        films: [ ...this.state.films, ...data.results ], //copie de this.state.film et de data.results
        isLoading: false  //Arret du chargement
       })
  })
}
}

_searchFilms() {
  // on remet à zéro la Rechercher
  this.page = 0
  this.totalPAges = 0
  this.setState({
    film: []
  })

  console.log("page:"+this.page+"/totalPAges:"+this.totalPAges+"/Nombre de films:"+this.state.films.length)
  this._loadFilms()
}

_searchTextInputChanged(text) {
  this.searchedText = text  // modification du texte recherché à chaque saisie de texte sans passer par le setState
}

_displayLoading() {
  if (this.state.isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}

  render() {
    console.log(this.state.isLoading)
    return (
      <View style={styles.main_container }>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()}           // quand on fait entrer au clavier
           />
        <Button title="Rechercher" onPress={() => this._searchFilms()} />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) { // On verifie qu on a pas atteint la fin de la pagination (tatalPages) avant de charger plus d'éléments
              this._loadFilms()
              console.log("onEndReached")
            }
          }}
          />

          {this._displayLoading()}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right:0,
    top:100,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search

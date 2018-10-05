import React, { Component } from "react";
import firebase, { auth, provider } from '../firebase';
import ListItems from './ListItems';


class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: '',
            user: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
        const itemsRef = firebase.database().ref('shopping-items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            console.log(items);
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    text: items[item].text
                });
            }
            this.setState({
                items: newState
            });
        });
    }

    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user.email);
                this.setState({
                    user
                });
            });
    }

    render() {
        return (
            <div className="row justify-content-center" >
                <div className="col-12 col-md-8">
                    {this.state.user ?
                        <button onClick={this.logout}>Log Out</button>
                        :
                        <button onClick={this.login}>Log In</button>
                    }
                    {this.state.user ?
                        <div>
                            <div className='user-profile'>
                                <img src={this.state.user.photoURL} alt="user"/>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <input placeholder="enter Item" onChange={this.handleChange}
                                    value={this.state.text}>
                                </input>
                                <button type="submit">add</button>
                            </form>
                            <ListItems items={this.state.items} delete={this.deleteItem} />
                        </div>
                        :
                        <div className='wrapper'>
                            <p>You must be logged in to see the shopping-items and submit to it.</p>
                        </div>
                    }

                </div>
            </div>
        );
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('shopping-items');

        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text
        };
        itemsRef.push(newItem);
        this.setState(state => ({
            text: ''
        }));
    }
    deleteItem(id) {
        console.log(id);
        const itemRef = firebase.database().ref('shopping-items');
        itemRef.child(id).remove();

    }
}

export default AddItem;
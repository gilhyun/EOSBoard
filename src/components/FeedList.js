import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Feed from './Feed';

class FeedList extends Component {
    render(){
        const { newsfeed, loginAccountName } = this.props;
        const { handleRemoveFeed } = this.props;

        return (
            <Paper className="paper">
                <h3 className="newsfeedHeader" style={{paddingTop: "0px"}}>
                    News Feed
                </h3>
        
                <List component="nav" style={{paddingBottom: "0px"}}>
                    {
                        newsfeed &&
                        newsfeed.map((feed, index) => {
                            return <Feed id={feed.id} author={feed.author} content={feed.content} created={feed.created} key={index} removeFeed={handleRemoveFeed} loginAccountName={loginAccountName}/>
                        })
                    }
                </List>
            </Paper>
          )
    }
}

FeedList.defaultProps = {
    newsfeed : []
}

export default FeedList;
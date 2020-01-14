import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Grid } from 'semantic-ui-react';
import { PostCard } from "../components/PostCard";

const FETCH_POSTS_QUERY = gql`
    query {
        getPosts {
            id
            body
            createdAt
            username
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id
                username
                createdAt
                body
            }
        }
    }
`;

export const Home = () => {
    const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);
    if (loading) return <p>loading...</p>
    if (error) return <p>ERROR</p>
    if (!data) return <p>Not found</p>

    return (
        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {data.getPosts.map((getPost) => (
                    <Grid.Column key={getPost.id} style={{marginBotton: 20}}>
                        <PostCard post={getPost} />
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
};


// const { loading, data: { getPosts: posts }} = useQuery(FETCH_POSTS_QUERY);

    // return (
    //     <Grid columns={3}>
    //         {loading ? (
    //             <h1>Loading posts..</h1>
    //         ) : (
    //             posts &&
    //             posts.map((post) => (
    //                 <Grid.Column>

    //                 </Grid.Column>
    //             ))
    //         )}
    //     </Grid>
    // );
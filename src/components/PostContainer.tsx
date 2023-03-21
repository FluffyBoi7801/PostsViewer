import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(10);

    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000,
    });

    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [removePost, {}] = postAPI.useDeletePostMutation();

    const handleCreate = async () => {
        const title = prompt('Title?');
        const body = prompt('Body?');
        await createPost({title, body} as IPost);
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3);
    //     }, 2000);
    // }, []);

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    };

    const handleRemove = (post: IPost) => {
        removePost(post);
    };

    return (
        <div>
            <button onClick={() => refetch()}>REFETCH</button>
            <button onClick={() => handleCreate()}>New POST</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {posts && posts.map(post =>
                <PostItem post={post} remove={handleRemove} update={handleUpdate}/>
            )}
        </div>
    );
};

export default PostContainer;


let store = {
    addPost(title) {
        let newPostContent = store.state.profile.newPostContent
        let newPost = {
            title: title,
            content: newPostContent,
            likes: 0,
            views: 0,
            time: "Now",
            avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
        }
        store.state.profile.posts.unshift(newPost)
        store._callSubscriber(store)
    },

    state: {
        profile: {
            posts: [
                {
                    title: "Title 1",
                    content: "MyProfile of the first post.",
                    likes: 10,
                    views: 100,
                    time: "2 hours ago",
                    avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
                },
                {
                    title: "Title 2",
                    content: "MyProfile of the second post.",
                    likes: 5,
                    views: 50,
                    time: "1 day ago",
                    avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
                },
                {
                    title: "Title 3",
                    content: "MyProfile of the third post.",
                    likes: 3,
                    views: 25,
                    time: "3 days ago",
                    avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
                },
                {
                    title: "Title 4",
                    content: "MyProfile of the fourth post.",
                    likes: 8,
                    views: 60,
                    time: "5 days ago",
                    avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
                },
                {
                    title: "Title 5",
                    content: "MyProfile of the fifth post.",
                    likes: 12,
                    views: 80,
                    time: "1 week ago",
                    avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
                },
            ],
            addPostFunc: null,
            newPostContent: "",
            updatePostArea: null,
        },
        dialogsWindow: {
            dialogs: [
                { id: 1, name: "John Doe", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hey, how are you?", time: "2 hours ago" }, { sender: "Me", content: "I'msdfgsdfgsdfganks!", time: "1 hour ago" }] },
                { id: 2, name: "иван бебрин", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hey, how are you?", time: "2 hours ago" }, { sender: "Me", content: "I'mfgsdfgds", time: "1 hour ago" }] },
                { id: 3, name: "Николай Наумов", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hey, фывафываyou?", time: "2 hours ago" }, { sender: "Me", content: "I'mфываfgsdfg", time: "1 hour ago" }] },
                { id: 4, name: "Неважно", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hапывапывапывапyou?", time: "2 hours ago" }, { sender: "Me", content: "I'sdапапппппппппппsdfg", time: "1 hour ago" }] },
                { id: 5, name: "Попы", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hasdfasdfou?", time: "2 hours ago" }, { sender: "Me", content: "I'm gasdfasdfnks!", time: "1 hour ago" }] },
                // Добавьте больше диалогов
            ]
        }
    },

    _callSubscriber: null,

    changeRerender(newRerender) {
        store._callSubscriber = newRerender
    },

    updatePostArea(newText) {
        store.state.profile.newPostContent = newText
    }
}


export default store
window.store = store
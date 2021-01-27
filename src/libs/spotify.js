
export const authEndpoint = process.env.AUTH_ENDPOINT
const clientId = process.env.CLIENT_ID
const redirectUri = process.env.REDIRECT_URI
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});//the curly brakets tell as that we want the returned results as an object  
    // console.log(window.location.hash.split('&')[0].split('=')[1]); this is a way for only getting the token from url
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
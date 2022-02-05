function aGoTime(dateCreateMili) {
    const intervals = {
        forYears: 31536000,
        forMonths: 2592000,
        forDays: 86400,
        forHours: 3600,
        forMinutes: 60
    }
    let seconds = Math.floor(((new Date().getTime() / 1000) - dateCreateMili));
    let interval = seconds / intervals.forYears;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / intervals.forMonths;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / intervals.forDays;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / intervals.forHours;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / intervals.forMinutes;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

export const pushPost = async (postsArray, response) => {
    for await (const post of response.data.children) {
        postsArray.push({
            post_id: post.data.id,
            title: post.data.title,
            score: post.data.score,
            date_created: aGoTime(post.data.created),
            date_created_mili: post.data.created,
            num_comments: post.data.num_comments,
            author_name: post.data.author,
            post_image: post.data.thumbnail,
            url: post.data.url
        });
    }
}
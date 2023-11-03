export const useMovieDetails = (movieInfo) => {
    // Helper functions
    const returntimeWithUnit = (time, unit) => {
        if (typeof time !== 'number' || time === 0) {
            return '';
        }
        return `${time}${unit}`;
    };

    const formatRunTime = (time) => {
        if (typeof time !== 'number' || !time) {
            return "unknown"
        }

        const hours = Math.floor(time / 60);
        const minutes = time % 60;

        const formattedHours = returntimeWithUnit(hours, 'h');
        const formattedMinutes = returntimeWithUnit(minutes, 'min');

        return `${formattedHours} ${formattedMinutes}`.trim();
    }

    const formatBudget = (number) => {
        if (typeof time !== 'number' || !number) {
            return "unknown";
        }
        return "$" + number.toLocaleString('pl');
    }

    const formatDate = (date) => {
        if (!date) {
            return "unknown"
        }
        const convertedDate = new Date(date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formatedDate = convertedDate.toLocaleString('en-UK', options);

        return formatedDate;
    }

    const mapList = (list) => {
        if (!Array.isArray(list) || list.length === 0) {
            return 'unknown';
        }

        const names = list.map(item => item.name);
        return names.slice(0, 4).join(', ');
    };

    // Formated dproperties
    const runTime = formatRunTime(movieInfo.runtime);
    const budget = formatBudget(movieInfo.budget);
    const genres = mapList(movieInfo.genres);
    const production = mapList(movieInfo.production_companies);
    const countries = mapList(movieInfo.production_countries);
    const releaseDate = formatDate(movieInfo.release_date);

    const releaseYear = movieInfo.release_date.substring(0, movieInfo.release_date.indexOf("-"));
    const overview = movieInfo.overview || "This movie doesn't have a plot description yet."
    const votesAverage = movieInfo.vote_average || "0";
    const numberOfVotes = movieInfo.vote_count || "0";

    return {
        title: movieInfo.title,
        runTime,
        budget,
        genres,
        production,
        countries,
        releaseDate,
        releaseYear,
        overview,
        votesAverage,
        numberOfVotes
    }
};
const translateEta = (data, language) => {
    return data.map(function (item) {
        // Capitalize first letter of the language code to fit camel case result
        const lang = language.charAt(0).toUpperCase() + language.slice(1);

        return {
            route: item.route,
            stopName: item['stopName' + lang],
            dest: item['dest' + lang],
            etaDetails: item.etaDetails.map(function (eta) {
                return {
                    time: eta.time,
                    remark: eta['remark' + lang],
                    isScheduled: eta.isScheduled
                };
            })
        }
    })
};

const translateStrings = (data, language) => {
    return {
        title: data.title[language],
        to: data.to[language],
        langName: data.langName[language],
        etaError: data.etaError[language],
        minute: data.minute[language]
    }
};

export { translateEta, translateStrings };
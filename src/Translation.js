import { LANGUAGE_EN } from "./LangSlice";
const translateEta = (data, language) => {
    return data.map(function (item) {
        let stopName, destName;

        if (language === LANGUAGE_EN) {
            stopName = item.stopNameEn;
            destName = item.destEn;
        } else {
            stopName = item.stopNameTc;
            destName = item.destTc;
        }
        
        const etaDetails = item.etaDetails.map(function (eta) {
            let remark;

            if (language === LANGUAGE_EN) {
                remark = eta.remarkEn;
            } else {
                remark = eta.remarkTc;
            }

            return {
                time: eta.time,
                remark: remark
            };
        });

        return {
            route: item.route,
            stopName: stopName,
            dest: destName,
            etaDetails: etaDetails
        }
    })
};

const translateStrings = (data, language) => {
    let to, langName, etaError;

    if (language === LANGUAGE_EN) {
        to = data.to.en;
        langName = data.langName.en;
        etaError = data.etaError.en;
    } else {
        to = data.to.tc;
        langName = data.langName.tc;
        etaError = data.etaError.tc;
    }

    return {
        to: to,
        langName: langName,
        etaError: etaError
    }
};

export { translateEta, translateStrings };
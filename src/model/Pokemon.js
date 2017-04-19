import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const STATS = {
    HP: 'HP',
    PATK: 'Phys. Atk.',
    PDEF: 'Phys. Def.',
    SATK: 'Sp. Atk.',
    SDEF: 'Sp. Def.',
    SPD: 'Speed'
};

export default class Pokemon {
    constructor(jsonObj, fromCache = false) {
        fromCache ? this._initFromCache(jsonObj) : this._initFromNetwork(jsonObj);
    }

    _initFromNetwork(jsonObj) {
        const stats = {};
        this.JSON_OBJ = jsonObj;
        this.JSON_OBJ.stats.forEach((stat) => {
            stats[`${stat.stat.name}`] = stat.base_stat;
        });

        this.NAME = capitalizeFirstLetter(jsonObj.name);
        this.ID = jsonObj.id;
        this.HP = stats.hp;
        this.PATK = stats.attack;
        this.PDEF = stats.defense;
        this.SATK = stats['special-attack'];
        this.SDEF = stats['special-defense'];
        this.SPD = stats.speed;

        this.PMD_HP = this.convertHP(this.HP);
        this.PMD_PATK = this.convertStat(this.PATK);
        this.PMD_PDEF = this.convertStat(this.PDEF);
        this.PMD_SATK = this.convertStat(this.SATK);
        this.PMD_SDEF = this.convertStat(this.SDEF);
        this.PMD_SPD = this.convertStat(this.SPD);
    }

    _initFromCache(jsonObj) {
        this.NAME = jsonObj.NAME;
        this.ID = jsonObj.ID;
        this.HP = jsonObj.HP;
        this.PATK = jsonObj.PATK;
        this.PDEF = jsonObj.PDEF;
        this.SATK = jsonObj.SATK;
        this.SDEF = jsonObj.SDEF;
        this.SPD = jsonObj.SPD;

        this.PMD_HP = this.convertHP(this.HP);
        this.PMD_PATK = this.convertStat(this.PATK);
        this.PMD_PDEF = this.convertStat(this.PDEF);
        this.PMD_SATK = this.convertStat(this.SATK);
        this.PMD_SDEF = this.convertStat(this.SDEF);
        this.PMD_SPD = this.convertStat(this.SPD);
    }

    getImageUrl() {
        let id = this.ID + '';
        if (id.length !== 3) {
            id = id.length === 2 ? `0${id}` : `00${id}`
        }
        return `http://www.serebii.net/sunmoon/pokemon/${id}.png`
    }

    toJSON() {
        return {
            ID: this.ID,
            NAME: this.NAME,
            HP: this.HP,
            PATK: this.PATK,
            PDEF: this.PDEF,
            SATK: this.SATK,
            SDEF: this.SDEF,
            SPD: this.SPD
        }
    }

    _getStatDisplay(stat) {
        switch (stat) {
            case STATS.HP:
                return {
                    name: STATS.HP,
                    base: this.HP,
                    pmd: this.PMD_HP
                };
            case STATS.PATK:
                return {
                    name: STATS.PATK,
                    base: this.PATK,
                    pmd: this.PMD_PATK
                };
            case STATS.PDEF:
                return {
                    name: STATS.PDEF,
                    base: this.PDEF,
                    pmd: this.PMD_PDEF
                };
            case STATS.SATK:
                return {
                    name: STATS.SATK,
                    base: this.SATK,
                    pmd: this.PMD_SATK
                };
            case STATS.SDEF:
                return {
                    name: STATS.SDEF,
                    base: this.SDEF,
                    pmd: this.PMD_SDEF
                };
            case STATS.SPD:
                return {
                    name: STATS.SPD,
                    base: this.SPD,
                    pmd: this.PMD_SPD
                };
            default:
                return null;
        }
    }

    getStatTableRow(stat) {
        const statDisplay = this._getStatDisplay(stat);

        return statDisplay ? (
            <TableRow>
                <TableRowColumn>{statDisplay.name}</TableRowColumn>
                <TableRowColumn>{statDisplay.base}</TableRowColumn>
                <TableRowColumn>{statDisplay.pmd}</TableRowColumn>
            </TableRow>
        ) : null;
    }

    convertHP(hp) {
        //0 - 20   (+3)
        if (hp < 20) {
            return 3;
        }
        //21- 39   (+4)
        else if (21 <= hp && hp <= 39) {
            return 4;
        }
        //40- 59   (+5)
        else if (40 <= hp && hp <= 59) {
            return 5;
        }
        //60- 79   (+6)
        else if (60 <= hp && hp <= 79) {
            return 6;
        }
        //80- 99   (+7)
        else if (80 <= hp && hp <= 99) {
            return 7;
        }
        //100- 119 (+8)
        else if (100 <= hp && hp <= 119) {
            return 8;
        }
        //120- 139 (+9)
        else if (120 <= hp && hp <= 139) {
            return 9;
        }
        //140- 159 (+10)
        else if (140 <= hp && hp <= 159) {
            return 10;
        }
        //160- 179 (+11)
        else if (160 <= hp && hp <= 179) {
            return 11;
        }
        //180- 199 (+12)
        else if (180 <= hp && hp <= 199) {
            return 12;
        }
        //200- 250 (+13)
        else if (200 <= hp && hp <= 250) {
            return 13;
        }
        //250+     (+14)
        else if (250 < hp) {
            return 14;
        }
    }

    convertStat(stat) {
        //0 - 10  (-2)
        if (stat <= 10) {
            return -2;
        }
        //11- 39  (-1)
        else if (11 <= stat && stat <= 39) {
            return -1;
        }
        //40- 64  (+0)
        else if (40 <= stat && stat <= 64) {
            return 0;
        }
        //65- 79 (+1)
        else if (65 <= stat && stat <= 79) {
            return 1;
        }
        //80- 99  (+2)
        else if (80 <= stat && stat <= 99) {
            return 2;
        }
        //100-119 (+3)
        else if (100 <= stat && stat <= 119) {
            return 3;
        }
        //120-149 (+4)
        else if (120 <= stat && stat <= 149) {
            return 4;
        }
        //150+    (+5)
        else if (150 <= stat) {
            return 5;
        }
    }
}
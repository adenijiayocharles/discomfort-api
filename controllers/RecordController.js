"use strict";
const status = require("http-status");
const {
    handleErrorResponse,
    handleSuccessResponse,
} = require("../utilities/response");

const Record = require("../models/Record");

const create = async (req, res, next) => {
    try {
        await Record.create({
            pain_condition: req.body.pain_condition || "",
            level: req.body.level || "",
            location: req.body.location || "",
            symptoms: req.body.symptoms || "",
            description: req.body.description || "",
            triggers: req.body.triggers || "",
            medications: req.body.medications || "",
            interventions: req.body.interventions || "",
            timing: req.body.timing || "",
            environment: req.body.environment || "",
            notes: req.body.notes || "",
            user_id: req.user_details.data.id,
        });

        return handleSuccessResponse({
            res,
            message: "Pain record created successfully",
            status_code: status.CREATED,
        });
    } catch (error) {
        next(error);
    }
};

const all = async (req, res, next) => {
    try {
        const records = await Record.findAll({
            where: {
                user_id: req.user_details.data.id,
            },
        });

        if (records.length) {
            return handleSuccessResponse({
                res,
                message: "Records found",
                status_code: status.OK,
                body: { data: records },
            });
        } else {
            return handleSuccessResponse({
                res,
                message: "Records not found",
                status_code: status.OK,
                body: { data: [] },
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { create, all };

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadXLSX = uploadXLSX;
const XLSX = __importStar(require("xlsx"));
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function uploadXLSX(req, res) {
    const file = req.file;
    if (!file) {
        res.status(400).json({ error: "Arquivo não enviado" });
        return;
    }
    const workbook = XLSX.readFile(file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);
    for (const row of data) {
        const promotor = await prisma.promotor.upsert({
            where: { matricula: String(row.matricula) },
            update: { fotoUrl: row.foto || "",
                email: row.email,
                telefone: String(row.telefone)
            },
            create: {
                nome: row.nome,
                matricula: String(row.matricula),
                email: row.email,
                telefone: String(row.telefone),
                fotoUrl: row.foto || "",
            },
        });
        await prisma.desempenhoMensal.upsert({
            where: {
                promotorId_mes_ano: {
                    promotorId: promotor.id,
                    mes: Number(row.mes),
                    ano: Number(row.ano),
                },
            },
            update: {
                vendas: Number(row.vendas),
                faltas: Number(row.faltas),
            },
            create: {
                promotorId: promotor.id,
                mes: Number(row.mes),
                ano: Number(row.ano),
                vendas: Number(row.vendas),
                faltas: Number(row.faltas),
            },
        });
    }
    res.json({ message: "Dados processados com sucesso" });
    return;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const payment_constants_1 = require("../contants/payment.constants");
let PaymentService = class PaymentService {
    verifyPayment(orderId) {
        if (!orderId) {
            throw new common_1.NotFoundException('Order not found');
        }
        const randomNumber = Math.round(Math.random());
        return randomNumber === 1
            ? payment_constants_1.PAYMENT_STATE.CONFIRMED
            : payment_constants_1.PAYMENT_STATE.DECLINED;
    }
};
PaymentService = __decorate([
    common_1.Injectable()
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map
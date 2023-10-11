import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        message: string;
        phone: number;
        email: string;
        totalCost: number;
        createdAt: Date;
        updatedAt: Date;
        courseId: string;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(orderData: CreateOrderDTO): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        message: string;
        phone: number;
        email: string;
        totalCost: number;
        createdAt: Date;
        updatedAt: Date;
        courseId: string;
    }>;
    update(id: string, orderData: UpdateOrderDTO): Promise<{
        success: boolean;
    }>;
}

package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Orders;
import com.example.demo.service.OrderService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrdersController {

    @Autowired
    private OrderService ordersService;

    @GetMapping(value="/showCustomerPendingOrder/{custId}")
    public List<Orders> showCustomerPendingOrders(@PathVariable("custId") int custId) {
        return ordersService.showCustomerPendingOrders(custId);
    }

    @GetMapping(value="/showCustomerOrder/{custId}")
    public List<Orders> showCustomerOrders(@PathVariable("custId") int custId) {
        return ordersService.showCustomerOrders(custId);
    }

    @PostMapping(value = "/placeOrder", consumes = "application/json")
    public ResponseEntity<String> placeOrder(@RequestBody Orders orders) {
        System.out.println(orders);
        String result = ordersService.placeOrder(orders);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }


}

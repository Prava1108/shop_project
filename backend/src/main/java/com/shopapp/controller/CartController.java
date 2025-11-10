
package com.shopapp.controller;

import com.shopapp.model.Item;
import com.shopapp.repository.ItemRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final ItemRepository itemRepo;

    public CartController(ItemRepository itemRepo) {
        this.itemRepo = itemRepo;
    }

    @PostMapping("/add/{id}")
    public List<Item> addToCart(@PathVariable Long id, HttpSession session) {
        Item item = itemRepo.findById(id).orElseThrow();
        List<Item> cart = (List<Item>) session.getAttribute("cart");
        if (cart == null) {
            cart = new ArrayList<>();
        }
        cart.add(item);
        session.setAttribute("cart", cart);
        return cart;
    }

    @GetMapping("/view")
    public List<Item> viewCart(HttpSession session) {
        List<Item> cart = (List<Item>) session.getAttribute("cart");
        if (cart == null) {
            cart = new ArrayList<>();
        }
        return cart;
    }
}

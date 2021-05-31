package com.LocationTracking.TrackingSoftware.controller;
import com.LocationTracking.TrackingSoftware.model.Location;
import com.LocationTracking.TrackingSoftware.utility.FirebaseInitializer;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.concurrent.ExecutionException;

@RestController
public class FirebaseController {

    @Autowired
    FirebaseInitializer db;

    @GetMapping("/getLocation/{name}")
    public List<Map<String, Object>> getLocation(@PathVariable("name") String name) throws ExecutionException, InterruptedException {
        List<Map<String, Object>> l1 = new ArrayList<>();
        ApiFuture<QuerySnapshot> future = db.getFirebase().collection(name).orderBy("Time", Query.Direction.ASCENDING).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            l1.add(document.getData());
        }
        return l1;
    }



}

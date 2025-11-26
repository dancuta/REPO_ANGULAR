
* Use Mockoon for mocking http responses from backen




```     Modules
    AppRoot -- > Router module  --->      Home Component in Home Module
                                --->      ReservationList Component in Reservation Module
                                --->      ReservationForm Component in Reservation Module             < ------- > Reservation Service
                                


# Create application
ng new hotel --no-standalone

cd hotel

npm install bootstrap
# then import bootstrap.css into styles.css

# Create module home with Home component
ng g module home
ng g c home.component --module home

# Create reservation home with 2 components: reservation-form-component and reservation-list-component
ng g m reservation
ng g c reservation-form.component --module reservation
ng g c reservation-list.component --module reservation

# Create reservation service inside <<reservation>> folder
ng g s reservation/reservation-service

# Create a model interface RezervationModel
ng g i models/reservation-model
```



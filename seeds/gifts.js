exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('gifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('gifts').insert([
        {id: 1, user_id: 1, item: 'rocket launcher', url: 'https://www.alexbrands.com/product/outdoor-sports/blasteroid-rocket-with-launcher/', purchased: false},
        {id: 2, user_id: 3, item: 'tank', url: 'https://www.ebay.com/itm/WW2-Military-Tank-Collectible-1950-s-Vintage-Army-/392234154329', purchased: false},
        {id: 3, user_id: 3, item: 'laserbeam', url: 'https://www.ebay.com/itm/10000m-532nm-301-Green-Laser-Pointer-Lazer-Pen-Visible-Beam-Light-High-Power/401443320860?hash=item5d77e2f41c:g:y9MAAOSwWqpavZPv:rk:8:pf:0', purchased: false},
        {id: 4, user_id: 2, item: 'nightvision', url: 'https://www.ebay.com/itm/Nightfox-100V-Night-Vision-Monocular-Binoculars-Digital-Infrared-IR-3x20/232369188200?epid=515475158&hash=item361a486d68:g:BCAAAOSwhH1cPyHp:rk:1:pf:0', purchased: false},
        {id: 5, user_id: 1, item: 'robot', url: 'https://www.ebay.com/itm/ROT2U-6DOF-Aluminium-Robot-Arm-Clamp-Claw-Mount-Kit-w-Servos-for-Arduino-Silver/371815607274?epid=2109003104&hash=item5691efebea:g:SwkAAOSwtItbaqni:rk:7:pf:0', purchased: false},
        {id: 6, user_id: 2, item: 'robot', url: 'https://www.ebay.com/itm/ROT2U-6DOF-Aluminium-Robot-Arm-Clamp-Claw-Mount-Kit-w-Servos-for-Arduino-Silver/371815607274?epid=2109003104&hash=item5691efebea:g:SwkAAOSwtItbaqni:rk:7:pf:0', purchased: false}

      ])
    })
};

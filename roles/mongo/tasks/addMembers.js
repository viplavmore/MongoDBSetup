use admin
db.auth("{{ hostvars[inventory_hostname]['mongo-admin']  }}", "{{ hostvars[inventory_hostname]['password']  }}");
rs.add("{{ groups['mongoslave'][0] }}:27017");
rs.add("{{ groups['mongoslave'][1] }}:27017");
